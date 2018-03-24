import React, {Component} from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom'
import axios from 'axios'
import './style.css'
//定义一个类 继承 另外一个类
class More extends Component {
    //构造函数
    constructor(props) {
        super(props);
        //数据
        this.state = {
            movieList:[]
        }
    }

    //返回模板
    render() {
        return (
            <div className="More">
                <h1>影院热映</h1>
                <section id="list" className="grid">
                    {
                        this.state.movieList.map((ele,ind,arr)=>{
                            return <Link to={'/home/detail/'+ele.id} key={ind} className="movie-item"><div className="cover"><img src={ele.images.small} alt=""/></div><h3 className="info">{ele.title}</h3>
                            </Link>
                        })
                    }
                </section>
            </div>
        )
    }
    componentWillMount() {
        //正在热映
        let newUrl = 'https://api.douban.com/v2/movie/in_theaters'
        axios.get(newUrl).then((res) => {
            this.setState({
                movieList: res.data.subjects
            })
            console.log(this.state.movieList)
        }).catch((err) => {
            console.log(err)
        })
    }

}

export default More