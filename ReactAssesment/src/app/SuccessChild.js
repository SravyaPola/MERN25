import React from 'react';


let SuccessChild = (props)=>{
    let name = props.name; 
    let address = props.address;
    let SuccessStory = props.SuccessStory;
    return(
        <div>
            <p>Name is {name} and Address is {address}</p>
            <h6>{SuccessStory}</h6>
        </div>
    );
}
export default SuccessChild;