import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyAccountPage from "./pages/MyAccountPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Toaster />
      <NavBar />
      <Switch>
        <Route path={"/login"}>
          <LoginPage />
        </Route>
        <Route path={"/register"}>
          <RegisterPage />
        </Route>
        <Route path={"/my-account"}>
          <MyAccountPage />
        </Route>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
