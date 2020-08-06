import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const intialState ={ loggedin:true};

const reducer = (state =intialState,action) =>{
	 switch(action.type){
	 	  case "Login":
	 	 
	 	  state={...state,isLoggedIn :true}
	 	        
	 	  break;
	 	  case  "Logout":
          break;

	 }
	 return state;
	
}


const store = createStore(reducer);
 store.subscribe(()=> {

})
 store.dispatch({ type : "Login", isLoggedIn : true });


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

