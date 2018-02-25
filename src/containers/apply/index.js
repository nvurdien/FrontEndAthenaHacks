import React from 'react'
import {Title} from "../../components/title";
import ApplyForm from "../../components/applyForm";

export default () => (
    <div>
        <Title/>
        <div className="uk-flex uk-background-default uk-margin uk-padding-large">
            <ApplyForm/>
        </div>
    </div>
)