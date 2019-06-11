import axios from "axios"
import { PRODUCTS_FETCH } from "./types"


export const productsFetch= () => {

    /* Action 1 Fetch Order Data เก็บการเปลี่ยนแปลงค่าของ State ของ orders */
    /* จากนั้นไปแก้ไข Reducer ในไฟล์ OrderReducer */
    return dispatch => {
        axios.get("http://localhost:3001/products").then(
            res =>{
                /* return { type : "PRODUCTS_FETCH", } */
                dispatch({ type : PRODUCTS_FETCH , payload : res.data});
            }
        )
    }
}

/* action ลบ ต้องป้อน id ที่ต้องการลบ  */
export const productDelete = id => {
    axios.delete("http://localhost:3001/products" + id).then(res => {

        /* หลังจากลบไปแล้ว เรียกข้อมูลที่มีการเปลี่ยนแปลงค่าล่าสุดมาจาก server */
        axios.get("http://localhost:3001/products").then(
            res => {
                dispatch({ type : PRODUCTS_FETCH , payload : res.data})
        })
    })
}