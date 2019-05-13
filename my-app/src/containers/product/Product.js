import React, { Component } from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import ProductList from "../../components/product/ProductList"
import axios from "axios"



class Product extends Component{


 constructor(props){
    super(props)
    this.state = {product : null}
    this.delProduct = this.delProduct.bind(this)
}

componentDidMount(){
    axios.get("http://localhost/products").then(res =>{
        this.setState({products: res.data})
    })
}

delProduct(product){
    axios.delete("http://localhost/products/"+ product.id ).then(
        res=> {
            axios.get("http://localhost/products").then(
                res =>{
                    this.setState({products: res.data})    
                }
            )
        })
}

render() {
    return(
        <div>
            <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                        <h1>สินค้า</h1>
                        </div>
                 <div className="col-6">
                    <button className="btn btn-success title float-right">เพิ่มสินค้า</button>
                </div>
                </div>
                <ProductList product={this.state.products} 
                    onDelProduct={this.delProduct}
                    />
            </div>
            <Footer />
        </div>
    )
    } 
}
  
export default Product