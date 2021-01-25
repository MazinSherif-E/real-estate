import React from 'react';
import classes from '../../../convertion/App.css';
import { CgClipboard } from 'react-icons/cg'
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { CgCreditCard } from 'react-icons/cg'

const homeRealtors = props =>(
    <div className={classes.homeRealtors}>
        <h1 className={classes.homeSale__header}>REALTORS YOU CAN TRUST</h1>
        <div className={classes.homeRealtors__grid}>
            <div className={classes.homeRealtors__content}>
                <div className={classes.homeRealtors__icons}>
                    <div className={classes.homeRealtors__group}>
                        <CgClipboard className={classes.homeRealtors__icon1}/>
                        <div className={classes.homeRealtors__headPar}>
                            <h3 className={classes.homeRealtors__header}>FREE REGISTRATION NO HIDDEN FEES</h3>
                            <p className={classes.homeRealtors__text}>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                        </div>
                    </div>
                    <div className={classes.homeRealtors__group}>
                        <CgCreditCard className={classes.homeRealtors__icon}/>
                        <div className={classes.homeRealtors__headPar}>
                            <h3 className={classes.homeRealtors__header}>PROPERTY APPRAISAL FREE OF CHARGE</h3>
                            <p className={classes.homeRealtors__text}>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                        </div>
                    </div>
                    <div className={classes.homeRealtors__group}>
                        <HiOutlineLocationMarker className={classes.homeRealtors__icon}/>
                        <div className={classes.homeRealtors__headPar}>
                            <h3 className={classes.homeRealtors__header}>LARGE COVERAGE OFFICES IN 4 LOCATIONS</h3>
                            <p className={classes.homeRealtors__text}>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default homeRealtors;