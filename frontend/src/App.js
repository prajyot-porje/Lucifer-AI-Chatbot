import "./App.css";
import Home from "./components/home";
import Left from "./components/left";
import Searchpage from "./components/Searchpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState} from "react";

function App() {
  const [selectedAnswer, setSelectedAnswer] = useState(null); 
  
 

  return (
    <>
      <div className="bg-black min-h-screen">
        <div className="flex text-white min-h-screen">
          <Left setSelectedAnswer={setSelectedAnswer} />

          <Routes>
            <Route
              exact
              path="/Searchpage"
              element={<Searchpage selectedAnswer={selectedAnswer}  />}
            />
            <Route exact path="/" element={<Home  />} />
          </Routes>
        </div>

      </div>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
