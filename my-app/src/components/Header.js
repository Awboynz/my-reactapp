 import React, { Component } from "react" 
import {
  Badge,
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
 /*  NavbarBrand, */
  Nav,
/*   NavItem,
  NavLink, */
   } from 'reactstrap';
   import axios from "axios"
  /*  import Order from "../containers/order/Order"; */


export class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {date : new Date()};
    setInterval(() => this.tick(), 1000); //Function SetInterval เรียกใช้งาน Tick
  }

  componentDidMount() {
    //setInterval(() => this.tick(), 1000);
    /* console.log('componentDidMount'); */
    axios.get("http://localhost:3001/orders").then(res =>{

        /* SetState ให้กับ res.data เพื่อนำไปใช้ */
        this.setState(() => { 
        return {orders: res.data } 
        })
        })
      }


  //Set State เพื่อเรียกใช้งานการอัพเดตเวลา
  tick(){
    this.setState({date : new Date()});
    this.toggle = this.toggle.bind(this)
    
  
    this.State = {
      isOpen: false
    }
  }

  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
                       
  /* แสดง Notification เมื่อผู้ใช้กดซื้อสินค้า */
  showordernoti(){
      /* เช็คว่า orders ไม่เท่ากับ null และ undefined */
      if(this.state.orders !== null && this.state.orders !== undefined)

      /* return เพื่อให้เรียกใช้  */
      return this.state.orders.length
  }
  refreshPage(){
    
    window.location.reload()
  }
  

  render() {
    const style = {height : 70}
  
    return (
      <div className="container-fluid">
          <div className="row">
              <div className="col-md-8 text-left">
                  <small>
                  <h1 className="text-success"><img style={style} src="/images/logo/logo.png" alt="" />Healthy CAFE</h1>
                  </small>
              </div>
              <div className="col-md-4 text-right">
                  <h5 className="text-muted mt-4">{this.state.date.toLocaleTimeString()}</h5>
            
              <div>
         
          < Navbar light expand="lg" > 
            <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* <NavItem>
                  <NavLink href="/" active>Home</NavLink>
              </NavItem> */}

              <Button color="primary" outline  href="/">
                  HOME <Badge color="primary"></Badge>
              </Button>
              <Button color="primary" outline  href="/orders">
                  Orders <Badge color="primary">{this.showordernoti()}</Badge>
              </Button>
              <Button color="primary" outline  href="/products">
                  Products <Badge color="primary"></Badge>
              </Button>
              <Button color="primary" outline  href="/about">
                  About <Badge color="primary"></Badge>
              </Button>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

              </div>
          </div>
      </div>
    )
  }
}


export default Header;
