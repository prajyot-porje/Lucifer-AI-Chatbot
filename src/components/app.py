import time
from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
import os
from urllib.parse import quote_plus
import google.generativeai as genai

# Configure Gemini AI API
genai.configure(api_key="YOUR_GEMINI_API_KEY")

# Set up the model
generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 0,
    "max_output_tokens": 8192,
}

safety_settings = [
    {
        "category": "HARM_CATEGORY_HARASSMENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_HATE_SPEECH",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
]

model = genai.GenerativeModel(
    model_name="gemini-1.5-pro-latest",
    generation_config=generation_config,
    safety_settings=safety_settings
)

app = Flask(__name__)

# MongoDB connection parameters
DB_USERNAME = "prajyotporje"
DB_PASSWORD = "Prajyot@17"
DB_CLUSTER = "cluster17.54ifx5j.mongodb.net/chatgpt"

encoded_username = quote_plus(DB_USERNAME)
encoded_password = quote_plus(DB_PASSWORD)

MONGO_URI = f"mongodb+srv://{encoded_username}:{encoded_password}@{DB_CLUSTER}?retryWrites=true&w=majority"

app.config["MONGO_URI"] = MONGO_URI
mongo = PyMongo(app, uri=MONGO_URI)

@app.route("/api/chat", methods=["POST"])
def qa():
    if request.method == "POST":
        try:
            question = request.json.get("question")
            chat = mongo.db.chats.find_one({"question": question})
            
            if chat:
                data = {"question": question, "answer": chat['answer']}
                return jsonify(data)
            else:
                convo = model.start_chat(history=[])
                convo.send_message(question)
                answer = convo.last.text
                data = {"question": question, "answer": answer}
                mongo.db.chats.insert_one({"question": question, "answer": answer})
                return jsonify(data)
        except Exception as e:
            return jsonify({"error": str(e)}), 500
    return jsonify({"result": "invalid request method"})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
