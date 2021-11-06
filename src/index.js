import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import userReducer  from './features/userSlice';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    content: userReducer,
  });

  const store = createStore(rootReducer, composeWithDevTools());
ReactDOM.render(
 <Provider store={store}>
<App />
</Provider>
, document.getElementById("root"));

serviceWorker.unregister();