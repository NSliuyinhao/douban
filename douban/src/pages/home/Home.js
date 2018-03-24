import React, {Component} from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom'
import Swiper from 'swiper'
import axios from 'axios'
import './style.css'
//定义一个类 继承 另外一个类
class Home extends Component {
    //构造函数
    constructor(props) {
        super(props);
        //数据
        this.state = {
            movieShow:[],
            freeMovie:[],
            newsMovie:[],
            categoryList:['经典','冷门佳片','豆瓣高分','动作','喜剧','爱情','悬疑','恐怖','科幻','治愈','文艺','成长','动画','华语','欧美','韩国','日本','']

        }

    }
    //返回模板
    render() {
        return (
            <div className="Home">
                <div className="card">
                    {/*影院热映*/}
                    <section id="movie_showing">
                        <header>
                            <h2>影院热映</h2>
                            <Link to="/more">更多</Link>
                        </header>
                        <div className="section_content">
                            <ul className="row items">
                                {
                                    this.state.movieShow.map((ele,ind,arr)=>{
                                        return <li className="item item_movie" key={ind}>
                                            <Link to={'/home/detail/'+ele.id}>
                                                <div className="item-poster">
                                                    <img src={ele.images.small} alt=""/>
                                                </div>
                                                <span className="item-title">{ele.title}</span>
                                            </Link>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </section>
                    {/*免费在线观影*/}
                    <section id="movie_showing">
                        <header>
                            <h2>免费在线观影</h2>
                            <Link to="/more">更多</Link>
                        </header>
                        <div className="section_content">
                            <ul className="row items">
                                {
                                    this.state.freeMovie.map((ele,ind,arr)=>{
                                        return <li className="item item_movie" key={ind}>
                                            <Link to={'/home/detail/'+ele.id}>
                                                <div className="item-poster">
                                                    <img src={ele.images.small} alt=""/>
                                                </div>
                                                <span className="item-title">{ele.title}</span>
                                            </Link>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </section>
                    {/*新片速递*/}
                    <section id="movie_showing">
                        <header>
                            <h2>新片速递</h2>
                            <Link to="/more">更多</Link>
                        </header>
                        <div className="section_content">
                            <ul className="row items">
                                {
                                    this.state.newsMovie.map((ele,ind,arr)=>{
                                        return <li className="item item_movie" key={ind}>
                                            <Link to={'/home/detail/'+ele.id}>
                                                <div className="item-poster">
                                                    <img src={ele.images.small} alt=""/>
                                                </div>
                                                <span className="item-title">{ele.title}</span>
                                            </Link>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </section>
                    {/*分类浏览*/}
                    <section className="types">
                        <header>
                            <h2>分类浏览</h2>
                        </header>
                        <div className="section-content">
                            <ul className="type-list">
                                {
                                    this.state.categoryList.map((ele,ind)=>{
                                        return <li key={ind}>
                                            <Link to="/more">{ele}<span></span></Link>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </section>
                </div>
                <div className="download-app">
                    <div className="info">
                        <img src={require('../../static/logo.png')} alt=""/>
                        <div className="info-content">
                            <strong>豆瓣</strong>
                            <div>我们的精神角落</div>
                        </div>
                    </div>
                    <Link to="/">去App Store 免费下载iOS 客户端</Link>
                </div>
            </div>
        )
    }
    componentWillMount(){
        //正在热映
        let newUrl = 'https://api.douban.com/v2/movie/in_theaters?count=8'
        axios.get(newUrl).then((res)=>{
            this.setState({
                movieShow:res.data.subjects
            })
            console.log(this.state.movieShow)
        }).catch((err)=>{
            console.log(err)
        })
        // top250
        let freeUrl = 'https://api.douban.com/v2/movie/top250?count=8'
        axios.get(freeUrl).then((res)=>{
            this.setState({
                freeMovie:res.data.subjects
            })
            console.log(this.state.freeMovie)
        }).catch((err)=>{
            console.log(err)
        })
        //新片速递
        let newsUrl = 'https://api.douban.com/v2/movie/coming_soon?count=8'
        axios.get(newsUrl).then((res)=>{
            this.setState({
                newsMovie:res.data.subjects
            })
            console.log(this.state.freeMovie)
        }).catch((err)=>{
            console.log(err)
        })

    }
    componentDidMount(){
        console.log(this.props)
    }

}

export default Home