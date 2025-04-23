import React, {Component} from "react";

export default class SravyaComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : "Sravya Pola"
        };
    }

    changeNameEvent = (event) => {
        this.setState({
            name : `Elon Musk`
        });
        event.preventDefault();
    }

    changeForcefullyEvent = (event) => {
        //this.state.name = `Steve Jobs`;
        this.forceUpdate();
    }


    render(){
        return(
        <div>
            <h1>This is Header : {this.props.header} </h1>
            <p>Name is {this.state.name}</p>
            <button onClick={this.changeNameEvent}>Change Name</button> <br />
            <p></p>
            <button onClick={this.changeForcefullyEvent}>Change Force Fully Name</button>
        </div>
        );
    }
}
