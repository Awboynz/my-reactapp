import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import reducers from "./reducers"
import reduxThunk from "redux-thunk"

/* Create Store และสร้างตัวแปลเพื่อรับค่า, ใช้งาน reduxThunk middleware เพื่อให้สามารถ return ค่าเป็น function ได้ */
const store = createStore(reducers, {}, applyMiddleware(reduxThunk))


ReactDOM.render(

<Provider store={store}>
    <App />
</Provider> 

, document.getElementById('root'));
                  