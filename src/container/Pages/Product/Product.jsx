import React, {Component,Fragment} from "react";
import StateFullComponent from "../StateFullComponent/stateFullComponent";
import { connect } from "react-redux";

class Product extends Component{
    // state = {
    //     count: 1
    // }
    
    // handleCounter = (newValue) => {
    //     this.setState({
    //         count: newValue
    //     })
    // }

    render(){
        return(
            <Fragment>
                <div className="header">
                    <h3>R_Shop</h3>
                    <p>{this.props.count}</p>
                </div>
                <StateFullComponent handleOnChange={(value) => this.handleCounter(value)} />
            </Fragment>
        )
    }
}


const mapState = (state) => {
    return{
        count: state.totalOrder
    }
}


export default connect(mapState)(Product);
