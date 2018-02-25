import React from 'react'


const colorToWhite = {
    color:'white'
};

export const OffCanvasHeader = ({name}) => {
    return <div id="offcanvas-navbar" uk-offcanvas="mode: reveal; flip: true;">
        <div className="uk-offcanvas-bar">
            <ul className="uk-nav uk-nav-default" >
                <li className={name === "home" ? "uk-active" : ""}><a style={colorToWhite} href="/">Home</a></li>
                <li className={name === "getinvolved" ? "uk-active" : ""}><a style={colorToWhite} href="apply">Apply</a></li>
                <li className={name === "about" ? "uk-active" : ""}><a style={colorToWhite} href="qualifications">Qualifications</a></li>
                <li className={name === "committee" ? "uk-active" : ""}><a style={colorToWhite} href="process">Process</a></li>
                <li className={name === "contact" ? "uk-active" : ""}><a style={colorToWhite}  href="contact">Contact Us</a></li>
            </ul>
        </div>
    </div>
};