import './App.css';
import  Navbar  from "./components/Navbar";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./components/Projects";
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
      <Router basename='/'>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Projects}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About}/>
      </Switch>
    </div>
      </Router>
  );
}

export default App;
