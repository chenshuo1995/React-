import React, { Component, Fragment } from 'react';
import XiaoJieJieItem from './XiaoJieJieItem';
// import axios from 'axios';
import {CSSTransition , TransitionGroup} from 'react-transition-group';
import mockData from './assets/mock/mock';

class XiaoJieJie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: [
                '钢铁侠', '美国队长', '绿巨人'
            ]
        }
    }
    UNSAFE_componentWillMount(){
        console.log('componentWillMount---组件将要挂载到页面')
    }
    componentDidMount(){
        console.log('componentDidMount---组件挂载完成的时刻执行')
        let list = mockData.data.list;
        this.setState({
            list: list
        })
        // 在此生命周期函数内执行ajax请求操作
        // axios.get('https://easy-mock.com/mock/5bbab7c41ae8705b71ee9fd4/example/eat/list').then(res=>{
        //     // console.log(res);
        //     let list = res.data.data.list;
        //     this.setState({
        //         list: list
        //     })
        // }).catch(err=>{
        //     console.log(err);
        // })
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate---组件发生改变前执行')
        return true
    }
    UNSAFE_componentWillUpdate(){
        console.log('componentWillUpdate---组件更新前 shouldComponentUpdate之后执行')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate---组件更新之后执行')
    }
    componentWillUnmount(){
        this.setState((state,callback)=>{
            return
        })
    }
    render() {
        console.log('render---组件挂载中')
        return (
            <Fragment>
                <div className="title">
                    <input type="text" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加</button>
                </div>
                <ul className="list">
                    <TransitionGroup>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <CSSTransition
                                    timeout={1000}
                                    classNames='boss-text'
                                    unmountOnExit
                                    appear={true}
                                    key={index+item}  
                                >
                                    <XiaoJieJieItem key={index + item} content={item} index={index} deleteItem={this.deleteItem.bind(this)} />
                                </CSSTransition>
                            ) 
                            
                        })
                    }
                    </TransitionGroup>
                </ul>
            </Fragment>

        );
    }
    inputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue]
        })
    }
    deleteItem(index) {
        let arr = this.state.list
        arr.splice(index, 1)
        this.setState({
            list: arr
        })
    }
}

export default XiaoJieJie;