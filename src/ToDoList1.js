import React, { Component } from 'react';
// import { Input, Button, List } from 'antd';
import store from './store';
import { connect } from 'react-redux';
import { changeInputAction, addItemAction, deleteItemAction } from './store/actionCreators';
import ToDoListUi from './ToDoListUi';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

class ToDoList1 extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
    }
    render() {
        return (
            <div>
                {/* <div>
                    <Input placeholder={this.props.inputValue} style={{ width: '250px', marginRight: '10px' }} onChange={this.props.changeInputValue} />
                    <Button type="primary" onClick={this.props.addList}>增加</Button>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item, index) => <List.Item onClick={() => this.props.deleteItem(index)}>{item}</List.Item>}
                    />
                </div> */}
                <ToDoListUi
                    inputValue={this.props.inputValue}
                    list={this.props.list}
                    addList={this.props.addList}
                    changeInputValue={this.props.changeInputValue}
                    deleteItem={this.props.deleteItem}
                />
                {/* antd tabs */}
                <Tabs defaultActiveKey="3" onChange={this.tabChange}>
                    <TabPane tab="React基础" key="1">
                        React基础
                    </TabPane>
                    <TabPane tab="Redux基础" key="2">
                        Redux基础
                    </TabPane>
                    <TabPane tab="React-Redux" key="3">
                        React-Redux
                    </TabPane>
                </Tabs>
            </div>
        );
    }
    componentWillUnmount(){
        this.setState((state,callback)=>{
            return
        })
    }
    tabChange(key) {
        // console.log(key);
    }
}

const stateToProps = (state)=>{
    return{
        inputValue:state.inputValue,
        list:state.list
    }
}

const dispatchToProps = (dispatch) =>{
    return{
        changeInputValue(e){
            const action = changeInputAction(e.target.value)
            dispatch(action)
        },
        addList(){
            const action = addItemAction()
            dispatch(action)
        },
        deleteItem(index){
            const action = deleteItemAction(index)
            dispatch(action)
        }
    }
}

export default connect(stateToProps,dispatchToProps)(ToDoList1);