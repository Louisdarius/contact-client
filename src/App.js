import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import Contact from "./pages/contact";
import Profile from "./pages/profile";
import DeleteProfile from "./pages/deleteProfile";
import AddContact from "./pages/addContact";
import ViewContact from "./pages/viewContact";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/deleteProfile" component={DeleteProfile} />
          <Route exact path="/addContact" component={AddContact} />
          <Route exact path="/viewContact/:id" component={ViewContact} />
        </Switch>
      </Router>
    </div>
  );
}
