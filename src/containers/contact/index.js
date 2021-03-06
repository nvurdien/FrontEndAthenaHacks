import React from 'react'
import ContactForm from "../../components/contactForm";
import {Title} from "../../components/title";
import {Footer} from "../../components/footer";

export default () => (
    <div>
        <Title title="Contact Us" subtext=""/>
        <div className="uk-section uk-section-default uk-padding-large">
            <ContactForm/>
        </div>
        <Footer/>
    </div>
)