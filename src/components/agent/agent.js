import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../../convertion/App.css';

const agent = props =>{

    return(
        <div className={classes.agent}>
            <img src={props.img} alt="agent" className={classes.agent__img}/>
            <h3 className={classes.agent__name}>{props.name}</h3>
            <p className={classes.agent__job}>{props.job}</p>
            <Link className={classes.agent__button} to="/sales">Book Now</Link>
        </div>
    )
}

export default agent;