import React, { Component } from "react";

class Calculator extends Component {

    showOrders (orders) {
        if(!orders || orders.length === 0) {
            return <li className="text-right text-muted title">ไม่ได้เลือกสินค้า</li>
        } else {
            return orders.map(order => {

                return (
                    <li className="text-right text-dark title">
                        <strong><span className="text-uppercase">{order.product.productName} x {order.quantity} = </span></strong>

                        {/* จัดการ style ของราคายอดรวม */}
                        <span className="badge badge-primary badge-pill">{order.product.unitPrice * order.quantity}</span>
                                              
                        <button className="btn btn-light btn-sm" onClick={() => this.props.onDelOrder(order.product)} >X</button>
                    </li>
                    )
            })
        }
    }

    render() {
        const { totalPrice, orders } = this.props;
        return (
            <div>
                <strong><p className="text-dark text-uppercase text-left">ยอดรวมทั้งหมด</p></strong>
                <h1 className="text-right">{totalPrice} บาท</h1>
                <strong><p className="text-dark text-uppercase text-left text-bold"> รายการที่เลือก</p></strong>
                <hr />
                <ul className="list-unstyled">
                    
                    {this.showOrders(orders)}
                   
                </ul>
                <hr />
                {/* <button className="btn btn-block btn-danger title" onClick={()=> this.props.onConfirmOrder()}> ยืนยัน</button> */}

                <button type="button" className="btn btn-block btn-danger title" data-toggle="modal" data-target="#myModal" onClick={()=> this.props.onConfirmOrder()}> ยืนยัน</button>
                <button className="btn btn-block btn-secondary title" onClick={()=> this.props.onCancelOrder()} >ยกเลิก</button>
            </div>
        );
    }
}

export default Calculator;