import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './containers/homepage'
import Apply from './containers/apply'
import Contact from './containers/contact'
import Process from './containers/process'
import Qualification from './containers/qualification'
import './uikit.min.css';
import {Header} from "./components/header";
import {OffCanvasHeader} from "./components/offCanvasHeader";

const App = () => (
    <Router>
        <div>
            <Header/>
            <OffCanvasHeader/>

            <Route exact={true} path={"/"} component={Home} />
            <Route exact={true} path={"/apply"} component={Apply} />
            <Route exact={true} path={"/contact"} component={Contact} />
            <Route exact={true} path={"/qualification"} component={Qualification} />
            <Route exact={true} path={"/process"} component={Process} />
        </div>
    </Router>
);

export default App;
