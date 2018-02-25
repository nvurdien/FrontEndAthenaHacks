import React from 'react'
import {Title} from "../../components/title";
import ApplyForm from "../../components/applyForm";
import {Footer} from "../../components/footer";

export default () => (
    <div>
        <Title title="Apply" subtext=""/>
        <div className="uk-flex uk-background-default uk-margin uk-padding-large">
            <ApplyForm/>
        </div>
        <Footer/>
    </div>
)