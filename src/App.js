import React, {Component} from 'react';  
import LandingPage from './Routing/LandingPage';
import Routing from './Router/router.js';
import Header from './Routing/Header';

class App extends Component {  
    render() {  
        return (  
        <>
            <Header />
            <Routing />
        </>                   
    );  
}  
}  
export default App;