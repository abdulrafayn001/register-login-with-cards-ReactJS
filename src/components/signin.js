import React from "react";
import logo from './logo.png';
import { Redirect } from 'react-router';
import classes from "./classes.module.css";
class SignIn extends React.Component
 {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            pwd:'',
            id:-1,
            data:null
        }
    }

    handleEmailChange=(event)=> {
        this.setState({email: event.target.value});
    }

    handlePasswordChange=(event)=> {
        this.setState({password: event.target.value});
    }

    handleSubmit=(event)=> {
        event.preventDefault();
        console.log("entered email" +this.state.email);
        let check=this.userAuthentication(this.state.data,this.state.email,this.state.password);
        this.setState({id:check})
        if(check!==-1)
        {
            this.props.login();
        }
        else
        {
            alert("Invalid User")
        }
    }

    componentDidMount(){
        fetch(`http://localhost:8000/users`)
          .then(res => res.json())
          .then(json => this.setState({ data: json }));
    }

    userAuthentication=(data,email,password)=>
    {
        let list=[]
        data.map((u)=>{
            return (u.email===email && u.password===password)?list.push(u.id):null;
        })
        return list.length===1?list[0]:-1
    }
    render() {
        if(this.props.isLogin) 
        {
            this.props.selectCurrentUser(this.state.id)
            return <Redirect to="/home"/>;
        } 
        return ( 
            <form onSubmit={this.handleSubmit} className={classes.Form}>
                <div className={classes.Btn}>
                    <img src={logo} alt="logo" width="150px"/>
                </div>
                <label htmlFor="heading">
                    <h1 className={classes.Heading}>Welcome Back!</h1>
                </label>

                <label htmlFor="email">
                    <input onChange={this.handleEmailChange} className={classes.InputField} required type="email" name="email" id="email"/>
                    Email
                </label>

                <label htmlFor="password">
                    <input onChange={this.handlePasswordChange } className={classes.InputField} required type="password" name="pwd" id="pwd"/>
                    Password
                </label>

                <p className={classes.Forgot}>Forgot Password?</p>
                
                <div className={classes.Btn}>
                    <input className={classes.Button} type="submit" value="Login"/>
                    <h3 className={classes.CreateBtn} onClick={this.props.goToSignup}>Create Account</h3>
                </div>
                
            </form>
         );
    }
}
 
export default SignIn;