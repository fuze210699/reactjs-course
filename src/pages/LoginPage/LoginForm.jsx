import React from "react";

export default function LoginForm(props) {
  const { submit } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      email: "tranngocthien12a1@gmail.com",
      password: "123456",
    };
    submit(data);
  };

  return (
    <>
      <div className="form-group">
        <label htmlFor="">Your Email Address</label>
        <input type="email" name="email" className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="">Create Password</label>
        <input type="password" name="password" className="form-input" />
      </div>
      <div className="form-group">
        <span>
          By clicking Create Account, I agree to the{" "}
          <a href="/#">Temp of Service</a> and <a href="/#">Privacy Policy</a>.
        </span>
        <button type="button" onClick={(e) => handleSubmit(e)}>
          Create Account
        </button>
      </div>
    </>
  );
}
