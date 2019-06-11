import {PRODUCTS_FETCH} from "../actions/types"

/* รับค่า state และค่าเริ่มต้นเป็น Array ว่าง */
export default function(state = [], action) {
    /* เช็คว่า action ที่ส่งมาเป็นอะไร */
    switch(action.type){

       /*  ถ้าเป็น orders_fetch ให้ return ค่าที่เก็บไว้ใน payload*/
        case PRODUCTS_FETCH:
            return action.payload
        /* ถ้าไม่ใช้ให้ return ค่าเป็น state เดิม */
        default:
            return state
    }
}