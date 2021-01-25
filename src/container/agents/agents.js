import React, { useState } from 'react';
import classes from '../../convertion/App.css';
import Agent from '../../components/agent/agent';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import img1 from '../../images/agent1.jpg'
import img2 from '../../images/agent2.jpg'
import img3 from '../../images/agent3.jpg'
import img4 from '../../images/agent4.jpg'
import img5 from '../../images/agent5.jpg'
import img6 from '../../images/agent6.jpg'

const agents = props =>{
    const [agents, setagents] = useState({
        home1: {img: img1, name:"HAYLEY STONE", job: "Sales home"},
        home2: {img: img2, name:"CHRIS UTAN", job: "Sales home"},
        home3: {img: img3, name:"MARC JONES", job: "Sales home"},
        home4: {img: img4, name:"LISA TURNER", job: "Rental home"},
        home5: {img: img5, name:"ALEXA JOHNSON", job: "Rental home"},
        home6: {img: img6, name:"DUANE SAUNDERS", job: "Rental Agent"},
    })

    const agentsArray = [];
    for (let key in agents){
        agentsArray.push({
            id: key,
            agent: agents[key]
        })
    }

    return(
        <div className={classes.agents}> 
            <Header/>
            <div className={classes.agents__content}>
                <h1 className={classes.agents__header}>OUR AGENTS</h1>
                <div className={classes.agents__grid}>
                    <div className={classes.agents__items}>
                        {agentsArray.map(item=>{
                            return(<Agent img={item.agent.img} name={item.agent.name} job={item.agent.job}/>)
                        })}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default agents;