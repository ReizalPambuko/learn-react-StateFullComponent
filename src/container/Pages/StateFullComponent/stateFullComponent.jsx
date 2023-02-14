import React, {Component,Fragment} from "react";
import Counter from "../../../component/Counter";
import "./StateFullComponent.css"


class StateFullComponent extends Component{
    render(){
        return(
            <Fragment>
                <div className="product">
                    <img src="" alt="" />
                    <h1>Saya Belajar Router</h1>
                    <h2>Martabak manis</h2>
                    <Counter />
                </div>
            </Fragment>
        )
    }
}
export default StateFullComponent;
