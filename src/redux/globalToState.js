import globaltype from "./globalType"

const globalState = {
    totalOrder: 0
}

//reduce
const rootReduce = (state = globalState, action) => {
    if(action.type === globaltype.ADD_PLUS){
            return{
            ...state,
            totalOrder: state.totalOrder + 1
            }
        }
        if(action.type === globaltype.ADD_MINUS){
        if(state.totalOrder > 0){
            return{
            ...state,
            totalOrder: state.totalOrder - 1
            }
            
        }
    }
        return state;
}

export default rootReduce;