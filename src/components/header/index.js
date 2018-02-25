import React from 'react'

const colorToWhite = {
    color:'white'
};

export const Header = ({name}) => {
    return <div className="uk-position-top">
        <div className="uk-dark"
             uk-sticky=" animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 200">
            <nav className="uk-navbar-container uk-navbar-transparent uk-light" uk-navbar="">
                <div className="uk-navbar-left uk-panel uk-margin-left">
                    <a className="uk-logo" href="/">AthenaHacks</a>
                </div>
                <div className="uk-navbar-right uk-panel uk-margin-right">
                    <ul className="uk-navbar-nav uk-visible@s">
                        <li className={name === "process" ? "uk-active" : ""}><a href="/process">Process</a></li>
                        <li className={name === "qualifications" ? "uk-active" : ""}><a href="/qualifications">Qualifications</a></li>
                        <li className={name === "contact" ? "uk-active" : ""}><a href="/contact">Contact Us</a></li>
                        <li className={name === "apply" ? "uk-active" : ""}><a href="/apply">Apply</a></li>
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