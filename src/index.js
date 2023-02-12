import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Homes from './container/Homes/Homes';
import {createStore} from 'redux';
import {Provider} from 'react-redux';



const globalState = {
  totalOrder: 0
}

//reduce
const rootReduce = (state = globalState, action) => {
    if(action.type === 'HANDLE_PLUS'){
        return{
          ...state,
          totalOrder: state.totalOrder + 1
        }
    }
    if(action.type === 'HANDLE_MINUS'){
      if(state.totalOrder > 0){
        return{
          ...state,
          totalOrder: state.totalOrder - 1
        }
          
      }
    }
    return state;
}

//store
const storeRedux = createStore(rootReduce);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeRedux}>
    <Homes />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
