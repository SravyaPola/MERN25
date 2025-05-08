import { Component, PureComponent } from "react"
import React from "react"
import ChildComponent from "./ChildComponent";

//StudentComponent has a method called shouldComponentUpdate(). 
//shouldComponentUpdate should not be used when extending React.PureComponent.
//Please extend React.Component if shouldComponentUpdate is used.

//StudentComponent: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). 
//This component defines getSnapshotBeforeUpdate() only.

//In React, componentDidUpdate() can receive a snapshot parameter 
//if the component also implements the getSnapshotBeforeUpdate() lifecycle method. 
//This method is called right before the DOM is updated, and any value returned from 
//getSnapshotBeforeUpdate() is passed as the snapshot argument to componentDidUpdate(). 
//This allows you to capture information from the DOM before it's changed, 
//such as scroll position, for use in componentDidUpdate()

export default class StudentComponent extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            userName: 'Sravya Pola',
            userAddress: 'California'
        }
    console.log('Constructor called');
    }
    //called by child
    updateUserData = (name, address) =>{
        this.setState({userName : name, userAddress : address});
        console.log('Parent is called');
    }
    shouldComponentUpdate(nextProps, nextState){
        if(this.state.userAddress === nextState.userAddress){
            console.log('As address is same dont update anything(both username and address)');
            return false;
        }
        console.log('As address is not same so change both username and address');
        return true;
    }
    //if component updates then only this method is called (i.e called before update to capture old state)
    getSnapshotBeforeUpdate(prevProps,  prevState){
        console.log('Snapshot before update', prevState.userName , prevState.userAddress);
        return prevState;
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate - prevState:', prevState, 'snapshot:', snapshot);
        if (snapshot && snapshot.userName && snapshot.userAddress) {
            this.setState({
                prevStateSnapshot: snapshot
            });
        }
    }
    componentWillUnmount() {
        console.log('StudentComponent will unmount');
    }
    render(){
        return (
            <div>
               <h3>Parent StudentComponent</h3>
               <p>{this.state.userName} , {this.state.userAddress}</p>
               <ChildComponent sendData={this.updateUserData} userName={this.state.userName} userAddress={this.state.userAddress} />
            </div>
        );
    }
}