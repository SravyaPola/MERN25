import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; //
import { SaveStudentToDB, SaveStudentToDBUsingFetch } from "../../State/Student/StudentAction";

let StudentHookComponent = (props)=>{

    //this allows us to access the state from store as we do with mapStateToProps
    let studentState = useSelector((state) => state.studentReducer.student);

    console.log("StudentHookComponent", studentState)

    //useRef - this is reference hook from react library to help us create html element using ref keyword
    let userName = useRef(null)
    let password = useRef(null)
    let street = useRef(null)
    let mobile = useRef(null)

    //
    useEffect(()=>{
        console.log("StudentHookComponent - useEffect")
        userName.current.value = studentState.userName
        password.current.value = studentState.password
        street.current.value = studentState.street
        mobile.current.value = studentState.mobile
    },[])

    //we can dispatch the action to store by using useDipatch hook which implements mapDispatchToProps

    const dispatchStudent = useDispatch();

    let submitForm = (evt)=>{
        //this is the call to dispatcher using action creater
        //debugger;
        let studentObj = {
            userName: userName.current.value,
            password: password.current.value,
            street: street.current.value,
            mobile: mobile.current.value
        }

        //dispatchUser(SaveUserToDB(userObj))

        dispatchStudent(SaveStudentToDBUsingFetch(studentObj))

        //alert("User send to api via ajax call")

        evt.preventDefault();
    }

    return(
        <>
            <h1>Student SignIn - SignUp Page - Hooks</h1>
            <form className="form-control col-md-12" onSubmit={submitForm}>
                    <b>User Name</b>
                    <input type="text" className="form-control" placeholder={"Please type User Name"} 
                        ref={userName} maxLength={20} required></input>

                    <b>User Password</b>
                    <input type="password" className="form-control" placeholder={"Please type User Password"} 
                        ref={password} maxLength={20} required></input>
    

                    <b>User Address</b>
                    <input type="text" className="form-control" placeholder={"Please type User Address"} 
                        ref={street} maxLength={40} required></input>

                    <b>User Mobile</b>
                    <input type="number" className="form-control" placeholder={"Please type User Mobile"} 
                        ref={mobile} maxLength={20} required></input>


                    <button type="submit"> Login Student </button>
            </form>
        </>
    )
}

export default StudentHookComponent;