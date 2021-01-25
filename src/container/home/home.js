import React from 'react';
import classes from '../../convertion/App.css';
import Header from '../../components/header/header';
import { Link } from 'react-router-dom'; 
import Slider from '../slider/slider';
import HomeSale from './homeSale/homeSale';
import HomeRental from './homeRental/homeRental';
import HomeRealtors from './homeRealtors/homeRealtors';
import HomeOpinion from './homeOpinion/homeOpinion';
import HomeContact from './homeContact/homeContact';
import Footer from '../../components/footer/footer';

const home = props =>{
    return(
        <div className={classes.home}>
            <Header/>
            <Slider/>
            <div className={classes.slider__sign}>
                <div className={classes.slider__sign__content}>
                    <h1 className={classes.slider__sign__header}>STUNNING 6 BED HOUSE IN THE HEART OF THE CITY</h1>
                    <p className={classes.slider__sign__paragraph}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                    <div className={classes.slider__sign__footer}>
                        <h2 className={classes.slider__sign__price}>$2,000,000</h2>
                        <Link className={classes.slider__sign__button} to="/sales">ALL SALES</Link>
                    </div>
                </div>
            </div>
            <HomeSale/>
            <HomeRental/>
            <HomeRealtors/>
            <HomeOpinion/>
            <HomeContact/>
            <Footer/>
        </div>
    )
}

export default home;