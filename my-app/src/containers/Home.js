
import React , {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
/* import './Home.css' */
import Monitor from '../components/monitor/Monitor';

/* import axios from "axios" */
/* import ProductItem from './components/product/ProductItem'; */

/* ใช้งาน connect ของ react-redux เชื่อม React Component กับ redux คือ store action reducer */
import { connect } from 'react-redux';

/* ใช้งาน Product Action เพื่อเรียกข้อมูลจาก Product */
import { productsFetch } from "../actions"




class Home extends Component {

  constructor(props){
      super(props);
      this.state = {products : ""};
  }

  componentDidMount(){
    
     /*  // axios framework
         axios.get("http://localhost:3001/products").then(res => {
         this.setState({ products: res.data})
         
    });  */
    this.props.productsFetch()
  }

      
  render() {
    return (
        <div>
           <Header />
           {/* <Monitor products= {this.state.products}/> */}
           <Monitor products= {this.props.products}/>
           <Footer />

        </div>
    );
  }
}

/* ฟังก์ชั่น map และ connect state เพื่อเรียกสินค้า ใน prop ที่อยู่ใน store มาแสดง */
function mapStateToProps(state){
  console.log(state)
  return {products: state.products}
  

}
export default connect(mapStateToProps, {productsFetch}) (Home);
