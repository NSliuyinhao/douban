import React, {Component} from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom'
//定义一个类 继承 另外一个类
class Header extends Component {
    //构造函数*
    constructor(props) {
        super(props);
        //数据
        this.state = {

        }
    }

    //返回模板
    render() {
        return (
            <div className="Header" ref="page">
                <header className="dbNav">
                    <div className="dbNav-primary">
                        <Link to="/"><h1>豆瓣</h1></Link>
                        <nav>
                            <ul>
                                <li className="movie"><Link to="/">电影</Link></li>
                                <li className="book"><Link to="/">图书</Link></li>
                                <li className="status"><Link to="/">广播</Link></li>
                                <li className="group"><Link to="/">小组</Link></li>
                            </ul>
                            <Link to="/search"><span className="search"></span></Link>
                        </nav>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header