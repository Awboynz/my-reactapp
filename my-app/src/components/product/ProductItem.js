import React, { Component } from "react"
import { Button } from 'reactstrap'

  class ProductItem extends /* React.Component */ Component{  

   /*  constructor(props){
        super(props);
        
    } */

    doSomething(productName){
        console.log(productName);
    } 
    
    render(){
        const {productName, unitPrice, thumbnail} = this.props.product;
        return(
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail} alt="thumnail" />
                <h5 className="mt-2">{productName}</h5>
                <p className="title text-right">{unitPrice}</p>

                 {/* ใช้งาน Class ปุ่มของ Reactstrap */}

                 {this.props.onAddOrder &&
                <Button outline color="primary" onClick={() => this.props.onAddOrder(this.props.product)} >ซื้อ</Button>
                 }
                 {(this.props.onDelProduct || this.props.onEditProduct) &&
                <Button outline color="info" >แก้ไข</Button>
                 }
                 {(this.props.onDelProduct || this.props.onEditProduct) &&
                <Button outline color="danger" onClick={() => this.props.onDelProduct(this.props.product)} >ลบรายการ</Button>
                }
                </div>
        )
    }
}
  export default ProductItem;  