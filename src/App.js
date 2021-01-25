import React, { Component, Suspense } from 'react';
import classes from './convertion/App.css';
import { Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./container/home/home'));
const Agents = React.lazy(() => import('./container/agents/agents'));
const Sales = React.lazy(() => import('./container/sales/sales'));
const HomeIfo = React.lazy(() => import('./container/homeInfo/homeInfo'));

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Switch>
          <Route path="/home-info" render={ (props) => (<Suspense fallback={<p>Loading...</p>}> <HomeIfo {...props}/> </Suspense>)}/>          
          <Route path="/sales" render={ (props) => (<Suspense fallback={<p>Loading...</p>}> <Sales {...props}/> </Suspense>)}/>          
          <Route path="/agents" render={ (props) => (<Suspense fallback={<p>Loading...</p>}> <Agents {...props}/> </Suspense>)}/>          
          <Route path="/" render={ (props) => (<Suspense fallback={<p>Loading...</p>}> <Home {...props}/> </Suspense>)}/>          
        </Switch>
      </div>
    );
  }
}

export default App;
 