import React, {Component} from "react";
import UserSignIn from "./CommonComponents/UserSignIn";
import StudentSignIn from "./CommonComponents/StudentSignIn";
import StudentComponent from "./CommonComponents/PracticeSession/StudentComponent";
export default class ApplicationComponent extends Component {
    render(){
        return(
      <div>{<StudentComponent />}</div>  
        )
    }
}