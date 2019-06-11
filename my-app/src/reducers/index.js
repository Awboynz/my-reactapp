import { combindReducers } from "redux"
import ProductReducer from "./ProductReducer"
import OrderReducer from "./OrderReducer"


const rootReducer = combindReducers({
    orders: OrderReducer,
    products: ProductReducer

})
export default rootReducer