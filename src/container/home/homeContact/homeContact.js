import React from 'react';
import classes from '../../../convertion/App.css';

const homeContact = props =>{

    return(
        <div className={classes.homeContact} id="contact">
            <h1 className={classes.homeSale__header}>CONTACT US</h1>
            <div className={classes.homeRealtors__grid}>
                <div className={classes.homeRealtors__content}>
                    <div className={classes.homeContact__grid}>
                        <div className={classes.homeContact__col1}> 
                            <h2 className={classes.homeContact__subHeader}>ALTERNATIVELY YOU CAN FILL IN THE FOLLOWING CONTACT FORM:</h2>
                            <div className={classes.homeContact__inputs}>
                                <input type="text" placeholder="Name" className={classes.homeContact__input} required/>
                                <input type="email" placeholder="Email" className={classes.homeContact__input} required/>
                                <input type="text" placeholder="Subject" className={classes.homeContact__input} required/>
                                <input type="text" placeholder="Message" className={classes.homeContact__inputt} required/>
                                <button className={classes.homeContact__button}>Submit</button>
                            </div>
                        </div>
                        <div className={classes.homeContact__col2}>
                            <h3 className={classes.homeContact__subHeader}>TO SPEAK WITH AN AGENT, PLEASE CALL OR EMAIL US:</h3>
                            <div className={classes.homeContact__paragraph}>
                                <p>Email: info@mysite.com</p>
                                <p>Tel: 123-456-7890</p>
                                <p>Fax: 123-456-7890</p>

                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default homeContact;