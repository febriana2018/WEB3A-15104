import React from 'react';
import Header from './Header';
import './Contact.css'

export default function ContactPage(){
    return(
        <>
            <Header />
            <section id="about" className="about">
                <h4 className="feedback">You Can Contact Me At!</h4>
                <div className="container d-flex h-100 align-items-center">
                    <div className="card-spacing">
                        <div className="card">
                            <img width="100%" src="https://image.flaticon.com/icons/svg/1051/1051262.svg" alt="instagram logo"></img>
                            <div className="card-container">
                                <h4>Instagram</h4>
                            </div>
                        </div>
                    </div>
                    <div className="card-spacing">
                        <div className="card">
                            <img width="100%" src="https://image.flaticon.com/icons/svg/387/387597.svg" alt="email logo"></img>
                            <div className="card-container">
                                <h4>Email</h4>
                            </div>
                        </div>
                    </div>
                    <div className="card-spacing">
                        <div className="card">
                            <img width="100%" src="https://image.flaticon.com/icons/svg/1051/1051275.svg" alt="github logo"></img>
                            <div className="card-container">
                                <h4>Github</h4>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    );
}