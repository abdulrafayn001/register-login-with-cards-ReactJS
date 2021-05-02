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
      isLogin:false
    }
  }
  goToSignin=()=>{
    if(!this.state.SignInPage){
      this.setState({ SignInPage : true})
    }
  }

  login=()=>{
    this.setState({isLogin:true});
  }

  goToSignup=()=>{
    if(this.state.SignInPage){
      this.setState({ SignInPage : false})
    }
  }
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <div>
              {this.state.SignInPage?<SignIn goToSignup={this.goToSignup} isLogin={this.state.isLogin} login={this.login}/>:<SignUp isLogin={this.state.isLogin} goToSignin={this.goToSignin} login={this.login}/>}
            </div>
          </Route>

          <Route exact path="/home">
            <Home/>
          </Route>

          <Route exact path="/add_product">
            <AddProduct/>
          </Route>

          <Route exact path="/product_detail">
            <ProductDetail/>
          </Route>

          <Route exact path="/setting">
            <Setting/>
          </Route>

          <Route exact path="/delete_product">
            <DeleteProduct/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
