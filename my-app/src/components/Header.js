import React, { Component } from "react" 
import {
  
  Collapse,
  Navbar,
  NavbarToggler,
 /*  NavbarBrand, */
  Nav,
  NavItem,
  NavLink,
   } from 'reactstrap';

export class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {date : new Date()};
    setInterval(() => this.tick(), 1000); //Function SetInterval เรียกใช้งาน Tick
  }

  componentDidMount() {
    //setInterval(() => this.tick(), 1000);
    console.log('componentDidMount');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');

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
         
          < Navbar light expand="lg"> 
            <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavLink href="/" active>Home</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink active href="/orders">orders</NavLink>
              </NavItem>
              <NavItem>
                 <NavLink  active href="/products">products</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink active href="/about">about</NavLink>
              </NavItem>
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
