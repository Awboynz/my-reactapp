import React, { Component } from "react"

class Header extends Component {

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
                  <ul className="list-inline">
                      <li className="list-inline-item title"><a href="/">Home</a></li>
                      <li className="list-inline-item title"><a href="/orders">Order</a></li>
                      <li className="list-inline-item title"><a href="/products">Product</a></li>
                      <li className="list-inline-item title"><a href="/about">About</a></li>
                  </ul>
              </div>
          </div>
      </div>
    )
  }
}


export default Header;