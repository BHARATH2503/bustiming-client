import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Home.css"

export default function Home() {
    return (
        <div className="intro-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="intro-message">
                            <h1 className="animated slideInLeft">We have made you to know the bus timings Easy.</h1><br />
                            <h3 className="animated slideInRight">Explore your options.</h3>
                            <ul className="list-inline intro-social-buttons">
                                <li>
                                    <Link to="/searchbus"> <button className="button1 btn btn-success btn-sm"> <span className="network-name">Search Your Timings</span></button></Link>
                                </li>
                                <li>
                                    <Link to="/contact"><button className="button2 btn btn-primary btn-sm "> <span className="network-name">Feedback</span></button></Link>
                                </li>
                            </ul>
                           <h3 className="learn animated bounceInUp">About Our Website</h3><br />
                            <h4 style={{ fontWeight: 'bolder' }}>With a motive to make travel comfort and convenience this website will be helpful to commute.</h4>
                        </div></div>
                </div></div></div>
    );}