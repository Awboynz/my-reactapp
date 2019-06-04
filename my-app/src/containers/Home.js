
import React , {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
/* import './Home.css' */
import Monitor from '../components/monitor/Monitor';
import axios from "axios"
/* import ProductItem from './components/product/ProductItem'; */



class Home extends Component {

  constructor(props){
      super(props);
      this.state = {products : ""};
  }

  componentDidMount(){
    
      // axios framework
         axios.get("http://localhost:3001/products").then(res => {
         this.setState({ products: res.data})
         
    }); 
  }

      
  render() {
    return (
        <div>
           <Header />
           <Monitor products= {this.state.products}/>
           <Footer />

        </div>
    );
  }
}

export default Home;
