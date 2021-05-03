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
            description:"",
            user:null
         }
    }
    componentDidMount(){
        fetch(`http://localhost:8000/users/${this.props.user_id}`)
          .then(res => res.json())
          .then(json => this.setState({ user: json}));
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
        event.preventDefault();
        alert("Product Added")
        let user=this.state.user
        let product=
        {
            "name":this.state.name,
            "price":this.state.price,
            "description":this.state.description
        }
        user.products.push(product)
        
        fetch(`http://localhost:8000/users/${this.props.user_id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(user)
        })
        
        this.setState({
            name:"",
            price:0,
            description:""
        })
    }
    render() {
       
        return ( 
            <div>
                <Navbar/>
                <div className={classes.Form}>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="product_name">
                            <input value={this.state.name} required className={classes.InputField} onChange={this.handleProductNameChange} type="text" name="product_name" id="product_name" placeholder="Product Name"/>
                            Product Name
                        </label>
                        <label htmlFor="price">
                            <input value={this.state.price} required className={classes.InputField} onChange={this.handlePriceChange} type="number" name="price" id="price" placeholder="Price"/>
                            Price
                        </label>
                        <label htmlFor="description">
                            <textarea value={this.state.description} required className={classes.InputField} onChange={this.handleDescriptionChange} name="description" id="description" cols="30" rows="10" placeholder="Description..."></textarea>
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