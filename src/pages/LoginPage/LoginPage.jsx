import React from "react";
import LoginForm from "./LoginForm";
import "./style.css";

export default function LoginPage() {
  return (
    <div className="login_page">
      <div className="login_title">
        <h2>Create Account</h2>
      </div>
      <div className="login_form">
        <LoginForm />
      </div>
      <div className="sign-in-link">
        <span>Already Have An Account ?</span>
        <a href="/#">Sign In</a>
      </div>
    </div>
  );
}
