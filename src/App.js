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
    <Router className="bg-black">
      <div className="bg-black f">
        <div className="flex text-white ">
          
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
