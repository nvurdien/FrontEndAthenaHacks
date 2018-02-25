import React from 'react'
import './style.css'
import background from './blockchain-linux-2.jpg'
import {Footer} from '../../components/footer'
import {Link} from "react-router-dom";


const backgroundStyle = {
    minHeight: '750px',
    boxShadow: '-8px 21px 35px 0px rgba(0,0,0,0.38)',
    webkitBoxShadow: '-8px 21px 35px 0px rgba(0,0,0,0.38)',
    mozBoxShadow: '-8px 21px 35px 0px rgba(0,0,0,0.38)',
    backgroundImage: `url(${background})`
};

const backgroundOverlayStyle = {
    minHeight: '750px'
};

const backgroundTextStyle = {
    minHeight: '750px',
    background: 'rgba(34,34,34,0.3)'
};

const lineHeightChange = {
    lineHeight: '2.5'
};

const colorToWhite = {
    color:'white'
};


export default () => (
    <div>
        <div id="mainpage" className="uk-background-muted">

            <div className="uk-cover-container uk-background-cover uk-background-secondary" style={backgroundStyle}>
                {/*<img className="" src={backgorund} />*/}


                <div className="uk-cover-container uk-position-cover uk-blend-multiply uk-background-secondary" style={backgroundOverlayStyle}>
                </div>
                <div className="uk-cover-container uk-position-cover uk-flex-center uk-flex uk-flex-middle uk-overlay uk-overlay-primary" style={backgroundTextStyle}>

                    <div className="uk-child-width-1-1@s uk-text-center uk-grid-collapse uk-article" uk-grid="">
                        <div>
                            <p>
                                <h1 className="uk-article-title uk-light" style={{textShadow: "4px 5px 2px #000000"}}>B-Gun</h1>

                            </p>


                        </div>

                        <div style={lineHeightChange}>
                            {/*<h4 className="uk-article-lead" style={colorToWhite}><span>Learn more</span></h4>*/}

                            <p> <Link className="btn btn-1 btn-1a" to="/apply">Apply Now!</Link> </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="uk-section uk-section-secondary uk-padding-large uk-text-center">
            <h4 style={{textShadow: "2px 2px 2px #000000"}}>Why is this important?</h4>


            <p style={{textShadow: "2px 2px 2px #000000"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        <div className="uk-section uk-section-default uk-padding-large">
            <div className="uk-child-width-1-3@s uk-grid-match" uk-grid="" uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 500">
                <div>
                    <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                        <h3 className="uk-card-title" >Efficiency</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                        <h3 className="uk-card-title">Privacy</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                        <h3 className="uk-card-title">Security</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
        <hr className="uk-divider-icon"/>


        <div className="uk-section uk-section-default uk-padding-large">
            <h4>How long is our process?</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="uk-section uk-section-muted uk-padding-large">
            <h4>Any Questions or Comments</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p><Link className="uk-button uk-button-secondary" to="/contact"> Contact Us</Link></p>
        </div>
        <Footer/>
    </div>
)