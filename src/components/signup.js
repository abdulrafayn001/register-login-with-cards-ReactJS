import classes from "./classes.module.css";
import React from "react";
//import './signup.css'
class SignUp extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            username:'',
            email:'',
            password:'',
            contact:'',
            data:null
        }
    }

    handleUsernameChange=(event)=> {
        this.setState({username: event.target.value});
    }

    handleEmailChange=(event)=> {
        this.setState({email: event.target.value});
    }

    handlePasswordChange=(event)=> {
        this.setState({password: event.target.value});
    }

    handleContactChange=(event)=> {
        this.setState({contact: event.target.value});
    }

    handleSubmit=(event)=> {
        event.preventDefault();
        let allEmail=this.fetchEmils()

        const user={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password,
            contact:this.state.contact,
            products:{}
        }
        console.log(this.state.email)
        console.log(allEmail)
        console.log(allEmail.indexOf("abdulrafayn001@gmail.com"))
        allEmail.indexOf(this.state.email)>-1 ? alert("Email alreday exists"):this.registerUser(user)
        
    }

    componentDidMount() {
        fetch(`http://localhost:8000/users`)
          .then(res => res.json())
          .then(json => this.setState({ data: json }));
      }

    fetchEmils=()=>{
        let allEmail=[]
        this.state.data.map((d)=>{
            allEmail.push(d.email);
            return allEmail
        })
        return allEmail
    }

    registerUser=(user)=>{
        
        fetch('http://localhost:8000/users',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
            }).then(()=>{
                alert('Registered');
            })
    }

    render() { 
        return ( 
            <form className={classes.Form} onSubmit={this.handleSubmit}>
                <label htmlFor="heading">
                    <h1 className={classes.Heading}>Sign Up for Free</h1>
                </label>
                <label htmlFor="username">
                    <input className={classes.InputField} onChange={this.handleUsernameChange} required type="text" name="username" id="name" placeholder="Username *"/>
                    Username
                </label>
                <label htmlFor="email">
                    <input className={classes.InputField} onChange={this.handleEmailChange} required type="email" name="email" id="email" placeholder="Email *"/>
                    Email
                </label>
                <label htmlFor="password">
                    <input className={classes.InputField} onChange={this.handlePasswordChange} required type="password" name="pwd" id="pwd" placeholder="Password *"/>
                    Password
                </label>
                <label htmlFor="contact">
                    <input className={classes.InputField} onChange={this.handleContactChange} required type="tel" name="contact" id="contact" placeholder="Contact Number *"/>
                    Contact
                </label>

                <div className={classes.Btns}>
                    <input className={classes.Button} type="submit" value="Sign Up"/>
                    <input className={classes.Button} onClick={this.props.goToSignin} type="button" value="Sign In"/>
                </div>
            </form> 
        );
    }
}
export default SignUp;