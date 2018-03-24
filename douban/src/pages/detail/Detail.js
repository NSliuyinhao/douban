import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './dstyle.css'
//定义一个类 继承 另外一个类
class Detail extends Component {
    //构造函数
    constructor(props) {
        super(props);
        //数据
        console.log(this.props)
        this.state = {
            movieDetail: [],
            rating:[], //评分
            genres:[],//标签
            directors:'',//导演
            casts:[],//演员
            countries:[],//上映
            movieImage:[],//海报地址
            directors_img:'',//导演图片
            castsImgs:[]//演员图片
        }
    }
    //返回模板
    render() {
        return (
            <div className="Detail">
               <section className="promo-top-banner">
                   <div className="banner-bg">
                       <img src={require('../../static/bg.jpg')} alt=""/>
                   </div>
                   <div className="banner-wrapper">
                       <div className="banner-inner">
                           <div className="promo-title">
                               <span className="promo-title-text">用App打开</span><br/>
                               <span className="promo-title-text">查看影片获奖情况</span>
                           </div>
                           <div className="button-wrapper">
                               <Link to="/" className="promo-button download_app">极速下载</Link>
                               <Link to="/" className="promo-button open_app">打开</Link>
                           </div>
                       </div>
                   </div>
               </section>
                <div className="card">
                    <h1 className="title">{this.state.movieDetail.title}</h1>
                    {/*头部*/}
                    <section className="subject-info clearfix">
                        <div className="right">
                            <Link to="/">
                                <img src={this.state.movieImage.small} alt=""/>
                            </Link>
                        </div>
                        <div className="left">
                            <p className="rating"><span>评分:</span><strong>{this.state.rating.average}</strong><span className="evaluate">{this.state.movieDetail.ratings_count}人评价</span></p>
                            <p className="meta">118分钟/{this.state.genres[0]}/{this.state.genres[1]}/{this.state.directors}(导演)/{this.state.casts[0]}/{this.state.casts[1]}/{this.state.casts[2]}/{this.state.movieDetail.year}({this.state.countries[0]})上映</p>
                        </div>
                    </section>
                    {/*介绍*/}
                    <section className="subject-intro">
                        <h2>{this.state.movieDetail.title}的剧情介绍</h2>
                        <div className="bd">
                            <p className="p_open" ref="p_text">{this.state.movieDetail.summary}</p>
                            <a href="javascript:void (0)" className="expend" ref="open" onClick={()=>{
                                this.refs.p_text.className = ''
                                this.refs.open.style.display = 'none'
                            }}>(展开)</a>
                        </div>
                    </section>
                    <section className="celebrities">
                        <header>
                            <h2>影人</h2>
                        </header>
                        <div className="section-content">
                            <ul className="row items">
                                <li className="item">
                                    <Link to="/">
                                        <img src={this.state.directors_img.small} alt=""/>
                                        <span className="item-title name">{this.state.directors}</span>
                                        <span className="item-title role">导演</span>
                                    </Link>
                                </li>
                                {
                                    this.state.castsImgs.length > 0&&this.state.castsImgs.map((ele,ind)=>{
                                        return <li className="item" key={ind}>
                                                    <Link to="/">
                                                        <img src={ele.avatars.small} alt=""/>
                                                        <span className="item-title name">{this.state.casts[ind]}</span>
                                                        <span className="item-title role">演员</span>
                                                    </Link>
                                                </li>
                                    })
                                }

                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
    componentDidMount(){
       // console.log(this.props.match.params.id)
        var id = this.props.match.params.id;
        let detailUrl = 'https://api.douban.com/v2/movie/subject/'+ id;
        axios.get(detailUrl).then((res)=>{
            // console.log(res.data)
            var data = res.data;
            var ratings = res.data.rating;
            var cast = res.data.casts;
            var casts=[];
            console.log(cast)
            for(var i=0;i<cast.length;i++){
                casts.push(cast[i].name);
            }
            this.setState({
                movieDetail:data,
                rating:ratings,
                genres:data.genres,
                directors:data.directors[0].name,
                casts:casts,
                countries:data.countries,
                movieImage:data.images,
                directors_img:data.directors[0].avatars,
                castsImgs:cast
            })
            console.log(this.state.movieImage)
            console.log(this.state.movieDetail)
            console.log(this.state.rating)
        }).catch((err)=>{
            console.log(err)
        })

    }
}

export default Detail