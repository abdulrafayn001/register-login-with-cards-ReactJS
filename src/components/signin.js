import React from "react";
import logo from './logo.png';
import classes from "./classes.module.css";
class SignIn extends React.Component
 {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            pwd:''
        }
    }

    render() { 
        return ( 
            <form className={classes.Form}>
                <div className={classes.Btn}>
                    <img src={logo} alt="logo" width="150px"/>
                </div>
                <label htmlFor="heading">
                    <h1 className={classes.Heading}>Welcome Back!</h1>
                </label>

                <label htmlFor="email">
                    <input className={classes.InputField} required type="email" name="email" id="email"/>
                    Email
                </label>

                <label htmlFor="password">
                    <input className={classes.InputField} required type="password" name="pwd" id="pwd"/>
                    Password
                </label>

                <p className={classes.Forgot}>Forgot Password?</p>
                
                <div className={classes.Btn}>
                    <input className={classes.Button} type="button" value="Login"/>
                    <h3 className={classes.CreateBtn} onClick={this.props.goToSignup}>Create Account</h3>
                </div>
                
            </form>
         );
    }
}
 
export default SignIn;