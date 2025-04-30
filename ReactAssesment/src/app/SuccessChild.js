import React from 'react';


let SuccessChild = (props)=>{
    let name = props.name; 
    let address = props.address;
    let SuccessStory = props.SuccessStory;
    return(
        <div>
            <p>Name is {name} and Address is {address}</p>
            <p>{SuccessStory}</p>
        </div>
    );
}
export default SuccessChild;