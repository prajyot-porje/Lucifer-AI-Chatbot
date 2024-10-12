import "./App.css";
import Home from "./components/home";
import Left from "./components/left";
// import Searchpage from "./components/Searchpage";

function App() {
  return (
    <>
      <body class="bg-black-50">
        <div class="flex text-white h-[100vh]">
          <Left/>         
          <Home/>
        </div>
      </body>
    </>
  );
}

export default App;
