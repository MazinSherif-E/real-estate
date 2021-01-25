import * as actionTypes from '../actions/actionTypes';

const initialState={
    img: null,
    price: null,
    name: null,
    nav: false
}

const reducer = (state = initialState, action) =>{
    switch (action.type){
        case actionTypes.SET_HOME:
            return{
                ...state,
                img: action.img,
                price: action.price,
                name: action.name
            }
        case actionTypes.SET_NAV:
            return{
                ...state,
                nav: action.nav
            }
        default:
            return state;
    }
}

export default reducer; 