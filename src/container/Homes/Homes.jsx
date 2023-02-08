import React,{Component, Fragment} from "react";
import StateFullComponent from "../../component/stateFullComponent";
import Product from '../Product';
import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";
import GetDataApi from "../../component/getDataApi/GetDataApi";
import "./Homes.css"


class Homes extends Component{
    render(){
        return(
            <Router>
                <Fragment>
                    <div>
                        <Link to="/">Product</Link>
                        <Link to="/state">StateFull</Link>
                        <Link to="/get">GetDataApi</Link>
                    </div>
                    <Route exact path="/" component={Product} /> 
                    <Route path="/state" component={StateFullComponent} />
                    <Route path="/get" component={GetDataApi} />
                </Fragment>
            </Router>
        )
    }
}

export default Homes;