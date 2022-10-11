import React, { Component } from "react";
import "../sub-components-styling/SignUp.css";

export class SignUp extends Component {
  render() {
    return (
      <div>
        <form id="Sign-Up">
          <h1>New User</h1>
          <p>Email</p>
          <input type="text" placeHolder="Email" />
          <p>Password</p>
          <input type="text" placeHolder="Password" />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
