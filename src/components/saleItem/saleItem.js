import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../../convertion/App.css';

const sales = props =>{
    return(
        <div className={classes.salesItems}>
            <img src={props.img} className={classes.salesItems__img}/>
            <div className={classes.salesItems__info}>
                <p className={classes.salesItems__name}>{props.name}</p>
                <p className={classes.salesItems__hour}>1 hr</p>
                <p className={classes.salesItems__price}>${props.price}.00</p>
                <Link className={classes.salesItems__button} onClick={props.click}>More Info</Link>
            </div>
        </div>
    )
}

export default sales;