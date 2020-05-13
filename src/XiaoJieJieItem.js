import React, { Component } from 'react';
import PropTypes from 'prop-types';
class XiaoJieJieItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    UNSAFE_componentWillReceiveProps(){
        console.log('child---componentWillReceiveProps')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount---组件从页面中删除的时候执行')
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
    }
    render() { 
        return ( 
            <li onClick={this.deleteItem.bind(this)}>{this.props.avname}{this.props.content}</li>
        );
    }
    deleteItem(){
        this.props.deleteItem(this.props.index);
    }
}

XiaoJieJieItem.propTypes = {
    avname:PropTypes.string.isRequired,
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}

XiaoJieJieItem.defaultProps = {
    avname:'复仇者'
}

export default XiaoJieJieItem;