import React,{Component,Fragment,createContext} from "react";


const RootContext = createContext();
const Provider = RootContext.Provider;

//Provider
const GlobalProvider = (Children) => {
    return(
        class proiderComp extends Component{

    state = {
        totalOrder: 5
    }


    dispatch = (action) => {
        if(action.type === 'HANDLE_PLUS'){
            this.setState({
                totalOrder: this.state.totalOrder + 1
            })
        }

    if(action.type === 'HANDLE_MINUS'){
        if(this.state.totalOrder > 0){
            this.setState({
                totalOrder: this.state.totalOrder - 1
            })
            }
        } 
    }


    render(){
                return(
                    <Provider value={{
                        state: this.state,
                        dispatch: this.dispatch
                    }}>
                        <Children {...this.props}/>
                    </Provider>
                )
            }
        }
    )
}

export default GlobalProvider;

//consumer

const Consumer = RootContext.Consumer;

export const GlobalConsumer = (Children) => {
    return(
        class parentConsumer extends Component{
            render(){
                return(
                    <Consumer>
                        {
                            value => {
                                <Children {...this.props} {...value} />
                            }
                        }
                    </Consumer>
                )
            }
        }
    )
}















