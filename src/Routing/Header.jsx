import React from 'react';
import {Link} from 'react-router-dom'; 
import './Header.css' 

export default function Header(){
    return(
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="mmn navbar navbar-expand-md">
                            <div className="logo">
                                
                            </div>
                            <div className="collapse navbar-collapse" id="mmn1"> 
                                    <ul className="header-menu navbar-nav text-capitalize">
                                        <li className="nav-link">
                                            <Link to="/">
                                                <a className="a"><strong>Home</strong></a>
                                            </Link>
                                        </li>
                                        <li className="nav-link">
                                            <Link to="/contact">
                                                <a className="a"><strong>Contact</strong></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>        
    );
}