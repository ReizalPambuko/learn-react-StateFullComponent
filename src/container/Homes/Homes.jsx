import React,{Component, Fragment, createContext} from "react";
import Product from "../Pages/Product/Product";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import GetDataApi from "../Pages/getDataApi/GetDataApi";
import "./Homes.css"
import PokesApi from "../Pages/PostApi/PokesApi/PokesApi";
import DetailPost from "../Pages/DetailPost/DetailPost";
import GlobalProvider from "../../context/context";

class Homes extends Component{
    
    render(){
        return(
            <BrowserRouter>
                    <Fragment>
                            <div>
                                <Link to="/">PokesApi</Link>
                                <Link to="/state">Product</Link>
                                <Link to="/get">GetDataApi</Link>
                            </div>
                            <Route exact path="/" component={PokesApi} /> 
                            <Route path="/state" component={Product} />
                            <Route path="/get" component={GetDataApi} />
                            <Route path="/detail-post/:id" component={DetailPost}/>
                    </Fragment>
            </BrowserRouter>
        )
    }
}

export default GlobalProvider(Homes);