import React, { Component } from "react";

class Counter extends Component {

    state = {
        count: 1
    }

    handleCounter = () => {
        this.props.handleOnChange(this.state.count)
    }
    
    handlePlus = () => {
        this.setState({
            count: this.state.count + 1 
        }, () => this.handleCounter() )
    }

    handleMinus = () => {
        if(this.state.count > 0){
            this.setState({
                count: this.state.count - 1
            },() => this.handleCounter())
        }
    }

    render(){
        return(
            <div className="counter">
                <button className="minus" onClick={this.handleMinus}>-</button>
                <input type="text" value={this.state.count}/>
                <button className="plus" onClick={this.handlePlus}>+</button>
            </div>
        )
    }
}

export default Counter;