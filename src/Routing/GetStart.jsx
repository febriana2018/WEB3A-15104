import React from 'react';
import Header from './Header';
import './GetStart.css';

export default function GetStart(){
    return(
        <>
            <Header />
            <section className="back">
                <div className="first-content">
                    <div className="second-content">
                        <div className="img-start">
                            <img src="https://image.freepik.com/free-vector/young-girl-sitting-floor-with-laptop_102172-101.jpg" alt="image">
                            </img>
                        </div>
                        <div className="text-start">
                            <h1 className="h1-start">Febriana Pamungkasari</h1>
                            <p className="p-start">I'am just an ordinary girl who love to know about everything and learn new thing.
                                I'm a student of Universitas Gadjah Mada in major Computer and Information System. I learn about code,
                                design, and multimedia. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}