import "./login.css"

import React from 'react'

// Firebase
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../firebase/firebase-config'
import { useNavigate } from "react-router-dom"

function Login({ setIsAuth }) {

  let navigate = useNavigate()

  const login = () => {
    signInWithPopup(auth, provider)
    .then(() => {
      setIsAuth(true)
      navigate("/")
      localStorage.setItem("isAuth", true)
    })
  }

  return (
    <div className="login-container">
      <h3>Are you new ? Create a accound and enjoy !</h3>
      <div className='login-form'>
        <div className="login-container">
          <p>Sign In With Google to Continue</p>
          <button onClick={login} >
            <i class="fa-brands fa-google"></i>
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login