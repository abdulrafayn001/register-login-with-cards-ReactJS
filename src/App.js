import SignIn from './components/signin'
import SignUp from './components/signup'
import React from "react";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      SignInPage:false
    }
  }
  goToSignin=()=>{
    if(!this.state.SignInPage){
      this.setState({ SignInPage : true})
    }
  }

  goToSignup=()=>{
    if(this.state.SignInPage){
      this.setState({ SignInPage : false})
    }
  }
  render(){
    return (
      <div>
        {this.state.SignInPage?<SignIn goToSignup={this.goToSignup}/>:<SignUp goToSignin={this.goToSignin}/>}
      </div>
    );
  }
}

export default App;
