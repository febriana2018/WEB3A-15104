import React from 'react';
import {Link} from 'react-router-dom'; 
import './LandingPage.css' ;
import Header from './Header';

export default function LandingPage(){
    return(
        <div>
            <Header />
            <section id="banner-area" className="banner-area">
                <div className="container d-flex h-100 align-items-center">
                    <div className=" header-content wow zoomIn slow">
                        <h4 className="text-white">Hello, I Am</h4>
                        <h3 className="text-white m-top-20 m-bottom-35">Febriana P</h3>
                        <p className="text-white m-bottom-40">I'am a student of Universitas Gadjah Mada</p>
                        <Link to="/start">
                            <a className="btn btn-primary btn-lg"><strong>Get To Know Me!</strong></a>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}