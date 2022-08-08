import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

// Components
import Home from "./components/Home/Home"
import CreateText from "./components/create-new-text/CreateText"
import Login from "./components/Login/Login"
import { useState } from "react";

// FireBase
import { signOut } from "firebase/auth"
import { auth } from "./firebase/firebase-config";

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))

  const logout = () => {
    localStorage.clear()
    signOut(auth)
    .then(() => {
      setIsAuth(false)
      localStorage.clear()
      window.location.pathname = "/login"
    })

  }

  return (
    <div className="App">
      <BrowserRouter>
        <div className="navbar">
          <div className="nav-left">
            <div className="logo">
              <div><h2>KherSydne</h2></div>
            </div>
            <h2 className="line">|</h2>
            <div className="nav-items">
              <span className="span-common">
                <Link to={"/"}>Home</Link>
              </span>
              <span className="span-common">
                {
                  isAuth && (
                    <Link to={"/createtext"}>Create Post</Link>
                  )
                }
                
              </span>
            </div>
          </div>
          <div className="nav-login span-common">
            <span>
              {
                !isAuth ? (
                  <Link to={"/login"}>Login</Link>
                ) : (
                  <button 
                    onClick={logout}
                    className="logout-btn"
                    >{auth.currentUser.displayName} - Logout</button>
                )
              }
            </span>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth} />} />
          <Route path="/createtext" element={<CreateText />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;