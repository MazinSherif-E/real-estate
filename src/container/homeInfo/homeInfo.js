import React from 'react';
import classes from '../../convertion/App.css';
import img from '../../images/tyneroad.jpg';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { connect } from 'react-redux';

const homeInfo = props =>{

    return(
        <div className={classes.homeInfo}>
            <Header/>
            <img src={props.img} class={classes.homeInfo__img}/>
            
            <div className={classes.homeInfo__content}>
                <div className={classes.homeInfo__grid}>
                    <h1 className={classes.homeInfo__name}>{props.name}</h1>
                    <div className={classes.homeInfo__HP}>
                        <p className={classes.homeInfo__hour}>1 hr</p>
                        <p className={classes.homeInfo__price}>${props.price}.000</p>
                    </div>
                    <button className={classes.homeInfo__button}>Book Now</button>
                    <div className={classes.homeInfo__service}>
                        <h3 className={classes.homeInfo__subheader}>Service Description</h3>
                        <p className={classes.homeInfo__text}>Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.</p>
                    </div>
                    <div className={classes.homeInfo__contact}>
                        <h3 className={classes.homeInfo__subheader}>Contact Details</h3>
                        <p className={classes.homeInfo__text}>demonew@ .com</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        img: state.img,
        price: state.price,
        name: state.name
    }
}

export default connect(mapStateToProps)(homeInfo);