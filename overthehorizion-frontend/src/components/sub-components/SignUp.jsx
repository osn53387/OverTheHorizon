import React, { Component } from "react";

export class SignUp extends Component {
  render() {
    return (
      <div>
        <div id="Sign-Up">
          <h1>New User</h1>
          <p>email</p>
          <input type="text" placeHolder="email" />
          <p>password</p>
          <input type="text" placeHolder="password" />
          <button type="button">Register</button>
        </div>
      </div>
    );
  }
}
