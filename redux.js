const redux = require('redux');
const createStore = redux.createStore;


const initialState = {
    value: 0,
    age: 17
}
// reducer bisa update store cuma reducer yang bisa
const rootReducer = (state = initialState,action) => {
    if(action.type === 'ADD_AGE'){
        return{
            ...state,
            age: state.age + 1
        }
    }
    if(action.type === 'CHANGE_VALUE')
        return{
            ...state,
            value: state.value + action.newValue
        }
    return state;
}

// store wadah besar menyimpan state
const store = createStore(rootReducer);
console.log(store.getState())



// Dispatching action pemanggilan reducer misal panggil fungsi update

store.dispatch({type: 'ADD_AGE'})
store.dispatch({type: 'CHANGE_VALUE',newValue: 12})
console.log(store.getState())

