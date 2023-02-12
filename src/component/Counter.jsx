import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {

    render(){
        return(
            <div className="counter">
                <button className="minus" onClick={this.props.handleMinus}>-</button>
                <input type="text" value={this.props.count}/>
                <button className="plus" onClick={this.props.handlePlus}>+</button>
            </div>
        )
    }
}

//pangil state global ubah jadi props
const mapStateToProps = (state) => {
    return{
        count: state.totalOrder
    }
}


const mapStateToDispatch = (dispatch) => {
    return{
        handlePlus: () => dispatch({type: 'HANDLE_PLUS'}),
        handleMinus: () => dispatch({type: 'HANDLE_MINUS'})
    }
}



export default connect(mapStateToProps, mapStateToDispatch)(Counter);