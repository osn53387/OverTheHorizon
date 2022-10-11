import React, { Component } from "react";
import "../sub-components-styling/Login.css";

export class Login extends Component {
  render() {
    return (
      <div>
        <form id="Login">
          <h1>Returning User</h1>
          <p>Email</p>
          <input type="text" placeHolder="Email" />
          <p>Password</p>
          <input type="text" placeHolder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
