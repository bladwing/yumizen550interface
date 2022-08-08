import { BrowserRouter as Router } from "react-router-dom";


import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
       <Navigation/>
      </Router>
      <div className="bottomBorder">
          <div className="Date">data</div>
        </div>
    </div>
  );
}

export default App;


