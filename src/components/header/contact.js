import React, { useState, useRef, useEffect } from 'react';
import classes from '../../convertion/App.css';
import { Link } from 'react-scroll';
import { withRouter } from 'react-router-dom';
import * as indexAcion from '../../store/actions/action';
import { connect } from 'react-redux';

const contact = props =>{
    const contactHandler = () =>{
        props.onNavSuccess(!props.nav)
        props.history.push("/")
    }

    return <Link className={props.nav ? classes.nav__link: classes.header__link} onClick={contactHandler} click={props.close} to={"contact"} smooth={true} duration={2000}><div>Contact</div></Link>
}

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(contact));