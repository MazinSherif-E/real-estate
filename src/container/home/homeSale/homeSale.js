import React, { useState } from 'react';
import classes from '../../../convertion/App.css';
import Comp from './comp';
import randle from '../../../images/randleCloseport.jpeg';
import queen from '../../../images/queensWay2.jpg';
import down from '../../../images/tyneroadPort.jpg';

const homeSale = props =>{
    const [images, setImages] = useState({
        img1:{img: randle, name:"DOWN AVENUE", price: 500, rooms: 4}, 
        img2:{img: queen, name:"QUEENS WAY", price: 450, rooms: 6}, 
        img3:{img: down, name: "RANDALL CLOSE", price:790, rooms: 3}
    })

    const imagesrArray = [];
    for (let key in images){
        imagesrArray.push({
            id: key,
            image: images[key]
        })
    }

    return(
    <div className={classes.homeSale}>
        <div className={classes.homeSale__content}>
            <h1 className={classes.homeSale__header}>LATEST PROPERTIES FOR SALE</h1>
            <div className={classes.homeSale__homes}>
                {imagesrArray.map(item=>{
                    return(<Comp src={item.image.img} name={item.image.name} price={item.image.price} rooms={item.image.rooms}/>)
                })}
            </div>
        </div>
    </div>
)}
export default homeSale;