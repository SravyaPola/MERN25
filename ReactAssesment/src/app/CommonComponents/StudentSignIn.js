// 2. create StudentSignIn component using controlled way, should be class component, userName, password, mobile can be passed and shown upon sign in clicj, use a button to do the same
import React, {Component} from "react";
export default class StudentSignIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            mobile: '',
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
        e.preventDefault();
    }

    handleSignIn = (e) => {
        alert("Data " + this.state.username + " " + this.state.password + " " + this.state.mobile + " is saved!")
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <h2>Controlled Sign In</h2>
                <form>
                    <div>
                        <label>User Name : </label>
                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Password : </label>
                        <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Mobile : </label>
                        <input type="text" name="mobile" value={this.state.mobile} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>username = {this.state.username}</label><br/>
                        <label>password = {this.state.password}</label><br/>
                        <label>mobile = {this.state.mobile}</label><br/>
                    </div>
                    <button type="button" onClick={this.handleSignIn}>Sign In</button>
                </form>
            </div>
        );
    }
}