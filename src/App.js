import "./App.css";
import Home from "./components/home";
import Left from "./components/left";
import Searchpage from "./components/Searchpage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";




function App() {
  return (
    <>
    <Router>
      <div className="bg-black-50">
        <div className="flex text-white h-[100vh]">
        <Left/>   
        <Routes>
        <Route exact path="/Searchpage" element={<Searchpage />} />
        <Route exact path="/" element={<Home />} />
        </Routes>
                
          
        </div>
      </div>
      </Router>
    </>
  );
}

export default App;
