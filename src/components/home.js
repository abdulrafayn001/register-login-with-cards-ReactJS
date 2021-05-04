import React, { Component } from 'react'
import Navbar from './navbar'
import Card from './card'
import classes from './classes.module.css'
class Home extends Component {
    constructor(props)
    {
        super(props)
        this.state = { 
            user:null,
            done:false
         }
    }

    componentDidMount(){
        fetch(`http://localhost:8000/users/${this.props.user_id}`)
          .then(res => res.json())
          .then(json => this.setState({ user: json, done:true}));
    }

    showAllProducts=()=>{
        if(this.state.user)
        {
            return (this.state.user.products.map((item,contentIndex) => {
                return (
                <Card name={item.name} price={item.price} description={item.description} id={contentIndex}/>
                )
            }))
        }
    }
    
    render() {
        return (
            <div>
                <Navbar id={this.props.id}/>
                <div className={classes.CardsContainer}>
                    {this.state.done?this.showAllProducts():"Nothing"}
                </div>
            </div>
         );
    }
}
 
export default Home;