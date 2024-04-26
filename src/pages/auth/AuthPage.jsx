import { useState } from "react";

import { Login } from "../../componets/Login";

import { Register } from "../../componets/Register";

import './authPage.css';

export const AuthPage = () => {

  const [isLogin, setIsLogin] = useState(true)

  const handleAuthPageToggle = () => {
    
    setIsLogin((prev) => !prev)

  }

  return (
    <div className="auth-container">
      {isLogin ? (
        <Login switchAuthHandler={handleAuthPageToggle}/>
      ) : (
        <Register switchAuthHandler={handleAuthPageToggle}/>
      )}
    </div>
  )
}
