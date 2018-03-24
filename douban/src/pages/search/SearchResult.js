import React, {Component} from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom'
import axios from 'axios'
import './style.css'
//定义一个类 继承 另外一个类
class SearchResult extends Component {
    //构造函数
    constructor(props) {
        super(props);
        //数据
        this.state = {
            result:[]
        }
    }

    //返回模板
    render() {
        return (
            <div className="SearchResult">
                <header className="search-hd">
                    <input type="search" ref="input" placeholder="搜索 书 / 影 / 音 / 标签"/>
                    <span onClick={()=>{
                        let val = this.refs.input.value
                        console.log(val)
                        var values_text = 'query=' + val
                        if(val.trim().length>0){
                            this.props.history.push('/search/'+values_text)
                            this.componentDidMount(val)
                        }
                    }}>搜索</span>
                </header>
                <div className="search-bd">
                    <ul className="search-results">
                        <span>影视</span>
                        {
                            this.state.result.map((ele,ind)=>{
                                return <li key={ind}>
                                            <Link to={'/home/detail/'+ele.id}>
                                                <img src={ele.images.small} alt=""/>
                                                <div className="subject-info">
                                                    <span className="subject-title">{ele.title}</span><br/>
                                                    <span>评分:{ele.rating.average}</span>
                                                </div>
                                            </Link>
                                        </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount(val){
        var values
        if(val){
            values = val
        }else {
            values = this.props.match.params.id.split("query=")[1]
            console.log(values)
        }
        let url = 'https://api.douban.com/v2/movie/search?q='+values;
        axios.get(url).then((res)=>{
            console.log(res.data)
            var result=[]
            for(let i=0;i<res.data.subjects.length;i++){
                if(res.data.subjects[i].subtype === 'movie'){
                    result.push(res.data.subjects[i])
                }
            }
            console.log(result)
            this.setState({
                result:result
            })
        }).catch((err)=>{
            console.log(err)
        })

    }
}

export default SearchResult