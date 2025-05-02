//React
//5. create a webpack setup, index html and one css file to show css in next questions (can use app.css from our project)

// This is the current new setup

//6. how react renders dom in conservative manner - explain, also explain 

//React renders the DOM conservatively using a virtual DOM, 
// where it first calculates the minimal changes needed by comparing the new virtual DOM with the previous DOM using diffing algorithm.
// Then, it efficiently updates only the changed parts in the real DOM, avoiding full re-renders. 


//7. create a class component named - Success and show some quotes (messages) in it with h1,h2,h3 components
//8. create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success
//9. create SuccessStory as another component, pass this as props in SuccessChild from Success component

import React, {Component} from "react";
import SuccessStory from "./SucessStory";
import SuccessChild from "./SuccessChild"

export default class Success extends Component {

    constructor(props){
        super(props);
        this.state = {
            name : "Sravya Pola",
            address: "California"
        };
    }

    render(){
        return(
            <div>
            <h1>Success is not final; failure is not fatal: It is the courage to continue that counts.</h1>
            <h2>It is better to fail in originality than to succeed in imitation.</h2>
            <h3>The road to success and the road to failure are almost exactly the same.</h3>
            <SuccessChild name = {this.state.name} address = {this.state.address} SuccessStory={<SuccessStory />} />
            </div>
        )
    }
}
//10. explain how virtual dom works and how it is coupled with state updates and state update API's

//The Virtual DOM (VDOM) is a lightweight, in-memory representation of the real DOM (Document Object Model). 
// It helps React manage UI updates more efficiently by keeping a virtual version of the UI in memory. 
// When changes occur, React updates only the necessary parts of the real DOM, instead of re-rendering everything.