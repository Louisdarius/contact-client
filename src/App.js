import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import Contact from "./pages/contact";
import Profile from "./pages/profile";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/contact" component={Contact} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}
