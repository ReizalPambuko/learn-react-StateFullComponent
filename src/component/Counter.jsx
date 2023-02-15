import React, { Component } from "react";
//import { RootContext } from "../container/Homes/Homes";
import { GlobalConsumer } from "../context/context";
//import { connect } from "react-redux";
//import globaltype from "../redux/globalType";

class Counter extends Component {
    render(){
        console.log(this)
        return(
            <div>
                <button className="min" onClick={() => this.props.dispatch({type: 'HANDLE_MINUS'})}>-</button>
                <input type="text" value={this.props.state.totalOrder}/>
                <button className="plus" onClick={() =>this.props.dispatch({type: 'HANDLE_PLUS'})}>+</button>
            </div>
        )
    }
}

//pangil state global ubah jadi props
// 



//export default connect(mapStateToProps, mapStateToDispatch)(Counter);
export default GlobalConsumer(Counter);