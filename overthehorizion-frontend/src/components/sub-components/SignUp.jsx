import React, { Component } from "react";
import "../sub-components-styling/SignUp.css";

export class SignUp extends Component {
  render() {
    return (
      <div>
        <form id="Sign-Up">
          <h1>New User</h1>
          <p>email</p>
          <input type="text" placeHolder="email" />
          <p>password</p>
          <input type="text" placeHolder="password" />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
