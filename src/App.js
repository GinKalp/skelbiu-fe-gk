import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthCtx } from "./store/authContext";

const NavBar = React.lazy(() => import("./components/NavBar/NavBar"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const RegisterPage = React.lazy(() => import("./pages/RegisterPage"));
const MyAccountPage = React.lazy(() => import("./pages/MyAccountPage"));
const Footer = React.lazy(() => import("./components/Footer/Footer"));

function App() {
  const { isLoggedIn } = useAuthCtx();

  return (
    <div className="App">
      <Toaster />
      <React.Suspense fallback={<p>Loading...</p>}>
        <NavBar />
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
      </React.Suspense>
    </div>
  );
}

export default App;
