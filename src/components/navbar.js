import React from 'react'
import "./navbar.css"
import {Link} from 'react-router-dom'
class Navbar extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="nav">
                <input type="checkbox" id="nav-check"></input>
                <div className="nav-header">
                    <div className="nav-title">
                    SNAPSE
                    </div>
                </div>

                <div className="nav-btn">
                    <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>
                {/* <Link to={{pathname:"/home",state:{id:this.props.id}}}>HOME</Link>
                    <Link to="/add_product">ADD PRODUCT</Link>
                    <Link to="/product_detail">PRODUCT DETAILS</Link>
                    <Link to="/setting">SETTINGS</Link>
                    <Link to="/delete_product">DELETE</Link> */}
                <div className="nav-links">
                    <Link to={{pathname:"/home", state:{ userid: this.state.id }}}>HOME</Link>
                    <Link to={{pathname:"/add_product", state:{ userid: this.state.id }}}>ADD PRODUCT</Link>
                    <Link to="/product_detail">PRODUCT DETAILS</Link>
                    <Link to="/setting">SETTINGS</Link>
                    <Link to="/delete_product">DELETE</Link>
                </div>
            </div>
         );
    }
}
 
export default Navbar;