import React, { Component } from 'react'
import Navbar from './navbar'
class Home extends Component {
    constructor(props)
    {
        super(props)
        this.state = { 
            data:null
         }
    }
    
     
    render() { 
        console.log(this.props.user_id)
        return (
            <div>
                <Navbar id={this.props.id}/>
                HOME
                <h1>{this.props.user_id}</h1>
            </div>
         );
    }
}
 
export default Home;