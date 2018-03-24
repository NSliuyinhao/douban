import React, { Component } from 'react';
//引入路由插件
import { BrowserRouter as Router,Route,Link,Redirect,Switch} from "react-router-dom";
import './App.css';
import Header from './pages/header/Header'
import Home from './pages/home/Home';
import More from './pages/more/More';
import Detail from  './pages/detail/Detail'
import Search from "./pages/search/Search";
import SearchResult from "./pages/search/SearchResult";

import { connect } from 'react-redux';
import {userLogin} from './store/actions'

class App extends Component {
    constructor(props){
        super(props)
        this.state ={
            menus:['电影','图书','广播','小组'],
            userInfo:'',

        }
    }
    render() {
        return (
            <Router>
                <div className="App">
                    <Header title="1"/>
                    <div>{this.props.userInfo}</div>
                    <Switch>
                        <Route path="/home" exact component={Home}></Route>
                        <Route path="/more" component={More}></Route>
                        <Route path="/search" exact component={Search}></Route>
                        <Route path="/search/:id" component={SearchResult}></Route>
                        <Route path="/home/detail/:id"  component={Detail}></Route>
                        <Redirect to={{pathname:"/home",state:{from:'/'}}}></Redirect>
                    </Switch>
                </div>
            </Router>
        );
    }
    componentDidMount(){

        this.props.dispatch(userLogin(2222))
        console.log(this.props)

    }

}
function select(state) {
    console.log(state)
    return{
        userInfo:state.add
    }
}
export default  connect(select)(App);
