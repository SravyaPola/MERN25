import React, {Component} from "react";
import UserSignIn from "./CommonComponents/UserSignIn";
export default class ApplicationComponent extends Component {
    render(){
        return(
      <div>{<UserSignIn />}</div>  
        )
    }
}