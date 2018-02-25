import React from 'react'
import {Title} from "../../components/title";
import ApplyForm from "../../components/applyForm";

export default () => (
    <div>
        <Title title="Apply" subtext=""/>
        <div className="uk-flex uk-background-default uk-margin uk-padding-large">
            <ApplyForm/>
        </div>
    </div>
)