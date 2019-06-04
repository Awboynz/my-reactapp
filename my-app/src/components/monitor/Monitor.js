import React, { Component } from "react"
import Calculator from "./Calculator"
import ProductList from "../product/ProductList"
import axios from "axios"
/* import Popup from 'react-popup';
import Button from "reactstrap/lib/Button"; */

class Monitor extends Component{

    constructor(props){
        super(props)

        this.state = {totalPrice: 0, orders: [], confirm: false, msg:("สั่งซื้อสำเร็จ")}
        this.addOrder = this.addOrder.bind(this)
        this.delOrder = this.delOrder.bind(this)
        this.confirmOrder = this.confirmOrder.bind(this)
        this.cancelOrder = this.cancelOrder.bind(this)
    }

    //Function เพิ่ม Product
    addOrder(product) {
        
        let findOrder = this.state.orders.find(order => order.product.id === product.id);

        /*เปรียบเทียบค่าใน Array ว่าใน Product เท่ากับ id หรือไม่ ถ้าใช่ให้เพิ่ม */
        if(findOrder) {
            //ถ้าใช่ให้+ quantity
            findOrder.quantity++;
        } else {
            //ถ้าไม่ใช่ให้ set quantity product = 1
            this.state.orders.push({product: product, quantity: 1});
        }
        //คำนวนราคาใหม่ โดยเอาราคา totalPrice + ราคาล่าสุด
        const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);
        //Set State ให้ราคาล่าสุดของ totalPrice ที่มีการเปลี่ยนแปลง
        this.setState({totalPrice: totalPrice, orders: this.state.orders, confirm:false});
    }

    //Function ลบ Product
    delOrder(product){
        let findOrder = this.state.orders.find(order => order.product.id === product.id);
        let resultOrder

        if(findOrder.quantity > 1){
            findOrder.quantity--
            resultOrder = this.state.orders
        } else{       
            resultOrder = this.state.orders.filter(order => order.product.id !== product.id)
        }
        let totalPrice = this.state.totalPrice - parseInt(findOrder.product.unitPrice)
        this.setState({totalPrice: totalPrice, orders: resultOrder, confirm:false})
     }
    

     refreshPage(){
         window.location.reload();
     }

     // Confirm Order >> กดปุ่ม ตกลง 
         confirmOrder(){
          const { totalPrice, orders } = this.state;
          if(orders && orders.length > 0){

          axios.post("http://localhost:3001/orders", {orderedDate: new Date(), totalPrice, orders})
          .then(res => {
             this.setState({totalPrice: 0, orders: [], confirm: true, msg:("สั่งซื้อสำเร็จ")})
             this.refreshPage()
         })
        }else   {
            this.setState({totalPrice: 0, orders: [], confirm: true, msg: ("สั่งซื้อสำเร็จ")})
        }   
     }

        //Cancel Order  >> กดปุ่มยกเลิก 
         cancelOrder() {
          this.setState({totalPrice: 0, orders: [], confirm: false})
        }


    render(){
        return (
             <div className="container-fluid">
                {this.state.confirm &&
                <div className="alert alert-secondary title text-right" role="alert">
                    {this.state.msg}
                </div>
                }  

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9">
                        <ProductList products={this.props.products}  onAddOrder={this.addOrder} />
                    </div>
                    <div className="col-md-3">
                        <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders} onDelOrder={this.delOrder} onCancelOrder={this.cancelOrder} onConfirmOrder={this.confirmOrder}  />
                    </div>
                </div>
            </div>
          </div>   
        )
    }
}

export default Monitor