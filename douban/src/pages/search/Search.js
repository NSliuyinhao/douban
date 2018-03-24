import React, {Component} from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom'
//定义一个类 继承 另外一个类
class Search extends Component {
    //构造函数
    constructor(props) {
        super(props);
        //数据
        this.state = {
            msg: 'hello'
        }
    }

    //返回模板
    render() {
        return (
            <div className="Search">
                <div className="TalionNav-second" ref="secondNav">
                    {/*<Link to="/home"></Link>*/}
                    <span className="close" onClick={()=>{
                        console.log(this.props.history)
                        this.props.history.goBack()

                    }}>关闭</span>
                    <div className="fm">
                        <div>
                            <input type="search" placeholder="请输入搜索内容" ref="input_text" onKeyDown={(e)=>{
                                if(e.keyCode === 13){
                                    var searchVal ='query=' + this.refs.input_text.value
                                    console.log(searchVal)
                                    this.props.history.push('/search/'+searchVal)
                                }
                            }}/>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <div>
                                <a href="/home">
                                    <strong>电影</strong>
                                    <span>影院热映</span>
                                </a>
                                <a href="/home">
                                    <strong>同城</strong>
                                    <span>周末活动</span>
                                </a>
                                <a href="/home">
                                    <strong>阅读</strong>
                                    <span>电子书</span>
                                </a>
                                <a href="/home">
                                    <strong>广播</strong>
                                    <span>友邻动态</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="/home">
                                    <strong>电影</strong>
                                    <span>影院热映</span>
                                </a>
                                <a href="/home">
                                    <strong>同城</strong>
                                    <span>周末活动</span>
                                </a>
                                <a href="/home">
                                    <strong>阅读</strong>
                                    <span>电子书</span>
                                </a>
                                <a href="/home">
                                    <strong>广播</strong>
                                    <span>友邻动态</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="/home">
                                    <strong>电影</strong>
                                    <span>影院热映</span>
                                </a>
                                <a href="/home">
                                    <strong>同城</strong>
                                    <span>周末活动</span>
                                </a>
                                <a href="/home">
                                    <strong>阅读</strong>
                                    <span>电子书</span>
                                </a>
                                <a href="/home">
                                    <strong>广播</strong>
                                    <span>友邻动态</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                    <div className="navBottom">
                        <div className="nav-item">
                            <a href="#">注册账号</a>
                            <a href="#">登录豆瓣</a>
                        </div>
                        <div className="nav-item">
                            <a href="#">使用桌面版</a>
                            <a href="#">使用豆瓣App</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){

    }
}

export default Search