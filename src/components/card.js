import classes from "./classes.module.css";

const Card = (props) => {
    return (
        <div className={classes.Card}>                    
            <div className={classes.Header}>                                
                <h1>{props.name}</h1>
            </div>
            <div class={classes.CardBody}>
                <p class="card-text">{props.description}</p>
                <div class={classes.Price}>
                    <div class="promotion-price-desc">Now</div>
                    <div class="promotion-price-text">{props.price}</div>                                    
                </div>
            </div>
        </div>
     );
}
 
export default Card;