
import './App.css'
import React , {Component} from "react"
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./containers/Home"


class App extends Component {

    constructor(props) {
      super(props)

      
    }

    renderRouter(){
      return(
        <Switch>
            <Route path="/" component={Home}></Route>
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
