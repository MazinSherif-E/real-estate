import React, { useState } from 'react';
import classes from '../../convertion/App.css';
import { Link } from 'react-router-dom';
import Contact from './contact';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { connect } from 'react-redux';
import * as indexAcion from '../../store/actions/action';

const header = props =>{

    const navClickHandler = () =>{
        props.onNavSuccess(!props.nav)
    }

    let links = null;
    if(props.nav){
        links = (
            <div className={classes.nav} onClick={navClickHandler}>
                <div className={classes.nav__links}>
                    <Link className={classes.nav__link} to="/"><div>Home</div></Link>
                    <Link className={classes.nav__link} to="/agents"><div>Agents</div></Link>
                    <Contact />
                    <Link className={classes.nav__link} to="/sales"><div>Book Online</div></Link>
                </div>
                <IoMdClose className={classes.nav__close}/>
            </div>
        )
    }
    return(
    <div className={classes.header}>
        {links}
        <div className={classes.header__logoCaption}>
            <Link to="/" className={classes.header__caption}>
                <div>
                    <h3 className={classes.header__bold}>FABER <p style={{fontWeight: 300, margin: "0 .5rem"}}>&</p> CO</h3>
                </div> 
                <div className={classes.header__light}>
                    <p>REAL ESTATE</p>
                </div>
            </Link>
        </div>
        <div className={classes.header__links}>
            <Link className={classes.header__link} to="/"><div>Home</div></Link>
            <Link className={classes.header__link} to="/agents"><div>Agents</div></Link>
            <Contact/>
            <Link className={classes.header__link} to="/sales"><div>Book Online</div></Link>
        </div>
        <FaBars className={classes.header__bars} onClick={navClickHandler}/>
    </div> 
)}

const mapStateToProps = state =>{
    return{
        nav: state.nav
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onNavSuccess: (nav)=> dispatch(indexAcion.setNavSuccess(nav))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(header);