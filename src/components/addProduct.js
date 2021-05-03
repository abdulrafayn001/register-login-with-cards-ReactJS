import React, { Component } from 'react'
import Navbar from './navbar'
import classes from './classes.module.css'
class AddProduct extends Component {
    constructor(props)
    {
        super(props)
        this.state = { 
            name:"",
            price:0,
            description:""
         }
    }
    handleProductNameChange=(event)=>{
        this.setState({name:event.target.value})
    }

    handlePriceChange=(event)=>{
        this.setState({price:event.target.value})
    }

    handleDescriptionChange=(event)=>{
        this.setState({description:event.target.value})
    }

    handleSubmit=(event)=>{
        alert("Product Added")
    }
    render() { 
        console.log(this.props)
        return ( 
            <div>
                <Navbar/>
                <div className={classes.Form}>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="product_name">
                            <input required className={classes.InputField} onChange={this.handleProductNameChange} type="text" name="product_name" id="product_name" placeholder="Product Name"/>
                            Product Name
                        </label>
                        <label htmlFor="price">
                            <input required className={classes.InputField} onChange={this.handlePriceChange} type="number" name="price" id="price" placeholder="Price"/>
                            Price
                        </label>
                        <label htmlFor="description">
                            <textarea required className={classes.InputField} onChange={this.handleDescriptionChange} name="description" id="description" cols="30" rows="10" placeholder="Description..."></textarea>
                        </label>
                        <div className={classes.Btn}>
                            <input className={classes.Button} type="submit" value="ADD"/>
                        </div>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default AddProduct;