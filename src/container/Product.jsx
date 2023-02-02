import React, {Component,Fragment} from "react";
import StateFullComponent from "../component/stateFullComponent";

class Product extends Component{
    state = {
        count: 1
    }
    
    handleCounter = (newValue) => {
        this.setState({
            count: newValue
        })
    }

    render(){
        return(
            <Fragment>
                <div className="header">
                    <h3>R_Shop</h3>
                    <p>{this.state.count}</p>
                </div>
                <StateFullComponent handleOnChange={(value) => this.handleCounter(value)} />
            </Fragment>
        )
    }
}

export default Product;
