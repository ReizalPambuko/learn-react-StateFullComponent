import React, {Component,Fragment} from "react";
import "./StateFullComponent.css"


class StateFullComponent extends Component{
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
            <Fragment>
                <div className="product">
                    <img src="" alt="" />
                    <h1>Saya Belajar Router</h1>
                    <h2>Martabak manis</h2>
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.count}/>
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </Fragment>
        )
    }
}

export default StateFullComponent;
