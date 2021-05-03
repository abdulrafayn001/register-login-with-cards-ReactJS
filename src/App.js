import SignIn from './components/signin'
import SignUp from './components/signup'
import AddProduct from './components/addProduct'
import ProductDetail from './components/productDetail'
import Setting from './components/setting'
import DeleteProduct from './components/deleteProduct'
import Home from './components/home'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import React from "react";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      SignInPage:false,
      isLogin:false,
      curruentUserId:0
    }
  }
  goToSignin=()=>{
    if(!this.state.SignInPage){
      this.setState({ SignInPage : true})
    }
  }

  selectCurrentUser=(id)=>
  {
    this.setState({curruentUserId:id})
  }

  login=()=>{
    this.setState({isLogin:true});
  }

  goToSignup=()=>{
    if(this.state.SignInPage){
      this.setState({ SignInPage : false})
    }
  }

  shouldComponentUpdate()
  {
    return this.state.curruentUserId<=0
  }
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <div>
              {this.state.SignInPage?<SignIn goToSignup={this.goToSignup} isLogin={this.state.isLogin} login={this.login} selectCurrentUser={this.selectCurrentUser}/>:<SignUp isLogin={this.state.isLogin} goToSignin={this.goToSignin} login={this.login} selectCurrentUser={this.selectCurrentUser}/>}
            </div>
          </Route>

          <Route exact path="/home">
            <Home user_id={this.state.curruentUserId}/>
          </Route>

          <Route exact path="/add_product">
            <AddProduct user_id={this.state.curruentUserId}/>
          </Route>

          <Route exact path="/product_detail">
            <ProductDetail user_id={this.state.curruentUserId}/>
          </Route>

          <Route exact path="/setting">
            <Setting user_id={this.state.curruentUserId}/>
          </Route>

          <Route exact path="/delete_product">
            <DeleteProduct user_id={this.state.curruentUserId}/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
