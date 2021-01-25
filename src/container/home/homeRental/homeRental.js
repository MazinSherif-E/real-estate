import React from 'react';
import classes from '../../../convertion/App.css';
import img1 from '../../../images/chatsworthPort.jpg';
import img2 from '../../../images/altone.jpg';
import { Link } from 'react-router-dom';

const homeRental = props =>(
    <div className={classes.homeRental}>
        <h1 className={classes.homeSale__header}>LATEST RENTAL PROPERTIES</h1>
        <div className={classes.homeRental__content}>
            <div className={classes.homeRental__firstRow}>
                <div className={classes.homeRental__rowContent}>
                    <div className={classes.homeRental__imgCaption}>
                    <Link to="/sales"><img src={img1} className={classes.homeRental__firstImg} al="img"/></Link> 
                        <div className={classes.homeRental__firstCaption}>
                            <h2 className={classes.homeRental__name}>CHASE AVENUE</h2>
                            <p className={classes.homeRental__rooms}>4 Bedrooms</p>
                            <p className={classes.homeRental__text}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                            <p className={classes.homeRental__price}>$500/per week</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.homeRental__secondRow}>
                <div className={classes.homeRental__rowContent}>
                    <div className={classes.homeRental__imgCaption}>
                        <div className={classes.homeRental__secondCaption}>
                            <h2 className={classes.homeRental__name}>KINGS CLOSE</h2>
                            <p className={classes.homeRental__rooms}>3 Bedrooms</p>
                            <p className={classes.homeRental__text}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                            <p className={classes.homeRental__price}>$450/per week</p>
                        </div>
                        <Link to="/sales"><img src={img2} className={classes.homeRental__secondImg} al="img"/></Link> 
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default homeRental;