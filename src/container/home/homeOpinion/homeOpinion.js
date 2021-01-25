import React from 'react';
import classes from '../../../convertion/App.css';
import { FaQuoteLeft } from 'react-icons/fa';

const homeOpinion = props =>(
    <div className={classes.opinion}>
        <h1 className={classes.opinion__header}>WHAT OUR CLIENTS THINK</h1>
        <div className={classes.homeRealtors__grid}>
            <div className={classes.homeRealtors__content}>
                <div className={classes.homeRealtors__icons}>
                    <div className={classes.opinion__group}>
                        <FaQuoteLeft className={classes.opinion__icon}/>
                        <p className={classes.opinion__text1}>"I'm a testimonial.Click to edit me and add text that says something nice about you and your services"</p>
                        <p className={classes.opinion__text}>- Tina & James Heart</p>
                    </div>
                    <div className={classes.opinion__group}>
                        <FaQuoteLeft className={classes.opinion__icon}/>
                        <p className={classes.opinion__text1}>"I'm a testimonial.Click to edit me and add text that says something nice about you and your services"</p>
                        <p className={classes.opinion__text}>- Mary van den Reicht</p>
                    </div>
                    <div className={classes.opinion__group}>
                        <FaQuoteLeft className={classes.opinion__icon}/>
                        <p className={classes.opinion__text1}>"I'm a testimonial.Click to edit me and add text that says something nice about you and your services"</p>
                        <p className={classes.opinion__text}>- Paul & Susan Taylor</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default homeOpinion;