import "./App.css";
import Home from "./components/home";
import Left from "./components/left";
import Searchpage from "./components/Searchpage";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [selectedAnswer, setSelectedAnswer] = useState(null); 
  const location = useLocation();

  useEffect(() => {
    const isReloading = window.performance.navigation.type === 1; 
    if (!isReloading) {
      return;
    }

    if (location.pathname !== "/") {
      window.location.href = "/"; 
    }
  }, [location.pathname]);

  return (
    <>
      <div className="bg-black min-h-screen">
        <div className="flex text-white min-h-screen">
          <Left setSelectedAnswer={setSelectedAnswer} />

          <Routes>
            <Route
              exact
              path="/Searchpage"
              element={<Searchpage selectedAnswer={selectedAnswer} />}
            />
            <Route exact path="/" element={<Home />} />
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
