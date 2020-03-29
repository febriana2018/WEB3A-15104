import React, {Component} from 'react';  
import {Switch, Route, BrowserRouter} from 'react-router-dom';  
import GetStart from '../Routing/GetStart';
import LandingPage from '../Routing/LandingPage';
import ContactPage from '../Routing/Contact';

class Router extends Component {  
    render() {  
        return (  
        <BrowserRouter>
            <Switch>  
                <Route path="/" exact component={LandingPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route path="/start" component={GetStart}/>
            </Switch>
        </BrowserRouter>                   
    );  
}  
}  
export default Router;