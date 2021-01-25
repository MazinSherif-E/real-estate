import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../../../convertion/App.css';

const comp = props =>(
    
        <div className={classes.comp}>
            <img src={props.src} alt="sale estates" className={classes.homeSale__img}/>
            <div className={classes.comp__content}>
                <h2 className={classes.comp__name}>{props.name}</h2>
                <p className={classes.comp__price}>${props.price},000</p>
                <p className={classes.comp__rooms}>{props.rooms} Bedrooms</p>
                <p className={classes.comp__par}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                <Link className={classes.comp__button} to="/sales">Read More</Link>
            </div>
        </div>
)
export default comp;