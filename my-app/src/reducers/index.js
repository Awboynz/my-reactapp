import { combineReducers } from "redux"
import ProductReducer from "./ProductReducer"
import OrderReducer from "./OrderReducer"



/* ใช้เก็บยอดรวม ของ OrderReducer และ ProductReducers */
const rootReducer = combineReducers({
    orders: OrderReducer,
    products: ProductReducer

})
export default rootReducer