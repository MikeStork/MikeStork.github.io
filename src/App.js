import './App.css';
import  Navbar  from "./components/Navbar";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
      <Router basename='/'>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/"/>
        <Route path="/contact"/>
        <Route path="/about"/>
      </Switch>
    </div>
      </Router>
  );
}

export default App;
