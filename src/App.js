import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyAccountPage from "./pages/MyAccountPage";
import Footer from "./components/Footer/Footer";
import { useAuthCtx } from "./store/authContext";
import NavBar2 from "./components/NavBar/NavBar2";
import NavBar3 from "./components/NavBar/NavBar3";
import Navbar1 from "./components/NavBar/Navbar1";

function App() {
  const { isLoggedIn } = useAuthCtx();
  return (
    <div className="App">
      <Toaster />
      <NavBar3 />
      <Switch>
        <Route path={"/login"}>
          <LoginPage />
        </Route>
        <Route path={"/register"}>
          <RegisterPage />
        </Route>
        {isLoggedIn && (
          <Route path={"/my-account"}>
            <MyAccountPage />
          </Route>
        )}
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route path={"*"}>
          <h1 className={"container"}>Oops, page not found.</h1>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
