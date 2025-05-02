// 1. create UserSignIn component using uncontrolled way, should be class component, userName, password, mobile can be passed and shown upon form submit, use a button to do the same
import React, { Component, createRef } from "react";

export default class UserSignIn extends Component {
  constructor(props) {
    super(props);
    this.userNameRef = createRef();
    this.passwordRef = createRef();
    this.mobileRef = createRef();

    this.state = {
      userName: "",
      password: "",
      mobile: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const userName = this.userNameRef.current.value;
    const password = this.passwordRef.current.value;
    const mobile = this.mobileRef.current.value;

    this.setState({ 
        userName, 
        password, 
        mobile 
    });

    alert(`Submitted Data:\nUsername: ${userName}\nPassword: ${password}\nMobile: ${mobile}`);
  };

  render() {
    return (
      <div>
        <h2>Un - controlled Sign In</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>User Name: </label>
            <input type="text" ref={this.userNameRef} />
          </div>
          <div>
            <label>Password: </label>
            <input type="text" ref={this.passwordRef} />
          </div>
          <div>
            <label>Mobile: </label>
            <input type="text" ref={this.mobileRef} />
          </div>
          <div>
                <label>username = {this.state.userName}</label><br/>
                <label>password = {this.state.password}</label><br/>
                <label>mobile = {this.state.mobile}</label><br/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
