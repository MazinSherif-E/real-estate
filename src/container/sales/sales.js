import React, { useState } from 'react';
import classes from '../../convertion/App.css';
import SalesItem from '../../components/saleItem/saleItem';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import img1 from '../../images/altone.jpg'
import img2 from '../../images/chatsworth.jpg'
import img3 from '../../images/randleClose.jpeg'
import img4 from '../../images/queensWay.jpg'
import img5 from '../../images/downAvenue.jpeg'
import img6 from '../../images/tyneroad.jpg'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as indexAction from '../../store/actions/action';

const sales = props =>{
    const [homes, setHomes] = useState({
        home1: {img: img1, name:"Altone Lane", price: "500"},
        home2: {img: img2, name:"Chatsworth Drive", price: "670"},
        home3: {img: img3, name:"Randle Close", price: "400"},
        home4: {img: img4, name:"Queens Way", price: "750"},
        home5: {img: img5, name:"Down Avenue", price: "580"},
        home6: {img: img6, name:"Tyne Road", price: "800"},
    })

    const homesArray = [];
    for(let key in homes){
        homesArray.push({
            id: key,
            home: homes[key]  
        })
    }

    const homeClickHandler=(img, price, name)=>{
        props.onHomeSet(img, price, name)
        props.history.push('/home-info')

    }

    return(
        <div className={classes.sales}>
            <Header/>
            <div className={classes.sales__content}>
                <h1 className={classes.sales__header}></h1>
                <div className={classes.sales__grid}>
                    <div className={classes.sales__items}>
                        {homesArray.map(item=>{
                            return(<SalesItem img={item.home.img} name={item.home.name} price={item.home.price} 
                                            click={() => homeClickHandler(item.home.img, item.home.price, item.home.name)}/>)
                        })}        

                    </div>
                </div>
            </div>
            <Footer/>   
        </div>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        onHomeSet: (img, price, name)=> dispatch(indexAction.setHomeSuccess(img, price, name)),
    }
}

export default connect(null, mapDispatchToProps)(withRouter(sales));