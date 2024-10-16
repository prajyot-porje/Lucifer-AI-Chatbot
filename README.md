# **Lucifer AI**

**Lucifer AI** is an intelligent chatbot built using **React.js**, **Flask**, **MongoDB**, **Tailwind CSS**, and the **Gemini AI API**. It is designed to provide a smooth conversational experience while showcasing advanced AI-driven functionalities.

## **Features**
- AI-powered conversational bot using the **Gemini AI API**
- Seamless user interface built with **React.js** and **Tailwind CSS**
- **Flask** backend to handle API requests and responses
- **MongoDB** integration for persistent data storage
- Hosted and fully functional chatbot

## **Table of Contents**
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)

## **Installation**

1. Clone the repository:
    ```terminal
    git clone https://github.com/prajyot-porje/Lucifer-AI-Chatbot.git
    cd lucifer-ai
    ```

2. Install dependencies for both frontend and backend:
    ```terminal
    # Frontend (React.js)
    cd frontend
    npm install

    # Backend (Flask)
    cd api/backend
    pip install -r requirements.txt
    ```

3. Set up **MongoDB** and ensure it's running locally or via a cloud service.

4. Set up environment variables (see below).

5. Start the development server:
    ```bash
    # Frontend
    cd frontend
    npm start

    # Backend
    cd ../backend
    flask run
    ```

## **Usage**

Once the servers are running, navigate to `http://localhost:3000` in your browser. Enter your query in the chatbot interface, and **Lucifer AI** will respond accordingly.

## **Technologies Used**
- **React.js**: Frontend framework
- **Flask**: Backend framework
- **MongoDB**: NoSQL database
- **Tailwind CSS**: CSS framework for styling
- **Gemini AI API**: AI-powered chatbot capabilities

## **Screenshots**
![TYPING-RESPONSE](https://github.com/user-attachments/assets/3fc951b1-df20-4e60-afda-bdd892462dfe)
![GENERATED-RESPONSE](https://github.com/user-attachments/assets/24f11fa5-5421-4572-8a10-8de2ed1a931f)


## **Environment Variables**

Ensure the following environment variables are set up in your project:

- `GEMINI_API_KEY`: Your Gemini AI API key
- `MONGO_URI`: MongoDB connection URI

## **Contributing**

We welcome contributions to improve **Lucifer AI**. If you would like to contribute, please follow the [contributing guidelines](CONTRIBUTING.md).


