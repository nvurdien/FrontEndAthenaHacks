import React from 'react'
import {Link} from "react-router-dom";
import './style.css'

const colorToWhite = {
    color:'white'
};

export const Header = ({name}) => {
    return <div className="uk-position-top">
        <div className="uk-dark"
             uk-sticky=" animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent; top: 200">
            <nav className="uk-navbar-container uk-navbar-transparent uk-light" uk-navbar="">
                <div className="uk-navbar-left uk-panel uk-margin-left">
                    <Link className="uk-logo" to="/">AthenaHacks</Link>
                </div>
                <div className="uk-navbar-right uk-panel uk-margin-right">
                    <ul className="uk-navbar-nav uk-visible@s">
                        <li className={name === "process" ? "uk-active" : ""}><Link to="/process">Process</Link></li>
                        <li className={name === "qualifications" ? "uk-active" : ""}><Link to="/qualification">Qualifications</Link></li>
                        <li className={name === "contact" ? "uk-active" : ""}><Link to="/contact">Contact Us</Link></li>
                        <li className={name === "apply" ? "uk-active" : ""}><Link to="/apply">Apply</Link></li>
                    </ul>
                    <div className="uk-navbar-right uk-hidden@s">
                        <a style={colorToWhite} className="uk-navbar-toggle uk-navbar-toggle-icon uk-icon" uk-navbar-toggle-icon=""
                           uk-toggle="target: #offcanvas-navbar">
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
};