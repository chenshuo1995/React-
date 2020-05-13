import React, { Component } from 'react';
import store from './store';
import { changeInputAction, addItemAction, deleteItemAction,getListAction } from './store/actionCreators';
import ToDoListUi from './ToDoListUi';
// import axios from 'axios';
import mockData from './assets/mock/mock';
class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.addList = this.addList.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        // 订阅redux数据变化
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    render() {
        return (
            <ToDoListUi
                inputValue={this.state.inputValue}
                list={this.state.list}
                addList={this.addList}
                changeInputValue={this.changeInputValue}
                deleteItem={this.deleteItem}
            />
        );
    }
    componentDidMount(){
        let list = mockData.data.list;
        const action = getListAction(list)
        store.dispatch(action)
        // axios.get('https://easy-mock.com/mock/5bbab7c41ae8705b71ee9fd4/example/eat/list').then(res=>{
        //     let list = res.data.data.list;
        //     const action = getListAction(list)
        //     store.dispatch(action)
        // }).catch(err=>{
        //     console.log(err.response);
        // })
    }
    componentWillUnmount(){
        this.setState((state,callback)=>{
            return
        })
    }
    changeInputValue(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    addList() {
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
}

export default ToDoList;