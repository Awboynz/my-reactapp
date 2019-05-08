
import './App.css'
import React , {Component} from "react"
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./containers/Home"
import About from "./containers/About"


class App extends Component {

    constructor(props) {
      super(props)
    }

    renderRouter(){
      return(
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
        </Switch>

      )
    }
    render(){
      return(
        <BrowserRouter>{this.renderRouter()}</BrowserRouter>
      )
    }

}


export default App;
