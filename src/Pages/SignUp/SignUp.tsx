import React from "react";
import Header from "../../Objects/Header/Header";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="main">
      <Header />
      <h1 className="title">Sign Up</h1>
      <p className="description">
        Fill out the information below to be added to our email list!
      </p>
      <div className="form-block">
        <form className="form-half">
          <label className="label">First Name</label>
          <input type="text" name="First Name" className="input" />
        </form>
        <form className="form-half">
          <label className="label">Last Name</label>
          <input type="text" name="Last Name" className="input" />
        </form>
        <form className="form-full">
          <label className="label">Email</label>
          <input type="text" name="Email" className="input" />
        </form>
        <input type="submit" name="Submit" className="button"/>
      </div>
    </div>
  );
}
export default SignUp;
