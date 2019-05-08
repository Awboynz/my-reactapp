import React, { Component } from "react"
import { Button } from 'reactstrap'

  class ProductItem extends React.Component{  

    constructor(props){
        super(props);
        
    }

    doSomething(productName){
        console.log(productName);
    } 
    
    render(){
        const {productName, unitPrice, thumbnail} = this.props.product;
        return(
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail} />
                <h5 className="mt-2">{productName}</h5>
                <p className="title text-right">{unitPrice}</p>

                 {/* ใช้งาน Class ปุ่มของ Reactstrap */}
                <Button outline color="primary" onClick={() => this.props.onAddOrder(this.props.product)} block>Buy</Button>{' '}
            </div>
        )
    }
}

  export default ProductItem;  