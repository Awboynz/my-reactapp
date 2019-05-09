import React, { Component } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import axios from "axios"


class Order extends Component {

    constructor(props){
        super(props)
        this.state = {orders: null}
    }
  
    componentDidMount(){

        axios.get("http://localhost:3001/orders").then(res =>
        this.setState({orders: res.data})
        )
    }

    delOrder(order){
        axios.delete("http://localhost:3001/orders" + order.id).then(res=>{
            axios.delete("http://localhost:3001/orders").then(
                res => {
                    this.setState({orders : res.data})
                }
            )
        })
    }
         
    showOrders(){
        return this.state.orders && this.state.orders.map(order => {
            const date = new Date(order.orderedDate)
            return (
                <div className="col-md-3">
                    <hr />
                    <p>
                        <button className="btn btn-danger btn-sm title" onClick={()=> this.delOrder(order)}>X</button>
                    </p>
                    <h5>วันที่ {date.toLocaleDateString} </h5>
                </div>
            )
        })
    }


    render(){
        return (
            <div>
                <header>
                    <div className="container-fluid">
                        <h1>รายการสั่งซื้อ</h1>
                        <div className="row">
                            {this.showOrders()}
                        </div>
                    </div>
                </header>
                <footer></footer>
            </div>
        )
    }


}
export default Order