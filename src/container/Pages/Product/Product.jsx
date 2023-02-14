import React, {Component,Fragment} from "react";
// import { connect } from "react-redux";
//import { RootContext } from "../../Homes/Homes";
import { GlobalConsumer } from "../../../context/context";
import StateFullComponent from "../StateFullComponent/stateFullComponent";


class Product extends Component{

    render(){
        return(
            <Fragment>
                <div className="header">
                    <h3>R_Shop</h3>
                    <p>{0}</p>
                </div>
                <StateFullComponent />
            </Fragment>
        )
    }
}


// const mapState = (state) => {
//     return{
//         count: state.totalOrder
//     }
// }


//export default connect(mapState)(Product);
export default Product;
