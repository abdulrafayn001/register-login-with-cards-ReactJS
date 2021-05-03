import classes from "./classes.module.css";

const Card = (props) => {
    return ( 
        <div className={classes.Form}>
            <h3>Name: {props.name}</h3>
            <h3>Price {props.name}</h3>
            <p>{description}</p>
        </div>
     );
}
 
export default Card;