import axios from "axios"
import { ORDERS_FETCH } from "./types"


export const ordersFetch= () => {

    /* Action 1 Fetch Order Data เก็บการเปลี่ยนแปลงค่าของ State ของ orders */
    /* จากนั้นไปแก้ไข Reducer ในไฟล์ OrderReducer */
    return dispatch => {
        axios.get("http://localhost:3001/orders").then(
            res =>{
                /* return { type : "orders_fetch", } */
                dispatch({ type : ORDERS_FETCH , payload : res.data});
            }
        )
    }
}

/* action ลบ ต้องป้อน id ที่ต้องการลบ  */
export const orderDelete = id => {
    return dispatch => {
        axios.delete("http://localhost:3001/orders" + id).then(res => {

            /* หลังจากลบไปแล้ว เรียกข้อมูลที่มีการเปลี่ยนแปลงค่าล่าสุดมาจาก server */
            axios.get("http://localhost:3001/orders").then(
                res => {
                    dispatch({ type : ORDERS_FETCH , payload : res.data})
                })
    })
    }
}