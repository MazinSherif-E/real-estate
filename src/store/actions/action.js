import * as actionTypes from './actionTypes';

export const setHome = (img, price, name) =>{
    return{
        type: actionTypes.SET_HOME,
        img: img,
        price: price,
        name: name
    }
}

export const setHomeSuccess = (img, price, name)=>{
    return dispatch=>{
        dispatch(setHome(img, price, name))
    }
}

export const setNav = (nav) =>{
    return{
        type: actionTypes.SET_NAV,
        nav: nav
    }
}

export const setNavSuccess = (nav)=>{
    return dispatch=>{
        dispatch(setNav(nav))
    }
}
