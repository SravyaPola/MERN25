import React, { PureComponent } from "react"

export default class ChildComponent extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            address: ''
        }
    }

    sendToParent = () =>{
        this.props.sendData(this.state.name, this.state.address)
        console.log('calling function in parent');
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
        console.log('State of child is changed');
    }

    render(){
        return (
            <div>
                <h4>Child Component</h4>
                Enter Username: <input name="name" onChange={this.handleChange}/><br/>
                Enter Address: <input name="address" onChange={this.handleChange}/><br/>
                <button onClick={this.sendToParent}>Send</button>

                <p>Data received from parent : {this.props.userName} and {this.props.userAddress}</p>
            </div>
        );
    }
}