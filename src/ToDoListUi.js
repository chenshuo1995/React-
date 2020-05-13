import React from 'react';
import { Input, Button, List } from 'antd';

// class ToDoListUi extends Component {
//     render() {
//         return (
//             <div>
//                 <div>
//                     <Input placeholder={this.props.inputValue} style={{ width: '250px', marginRight: '10px' }} onChange={this.props.changeInputValue} />
//                     <Button type="primary" onClick={this.props.addList}>增加</Button>
//                 </div>
//                 <div style={{ marginTop: '20px' }}>
//                     <List
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item, index) => <List.Item onClick={() => this.props.deleteItem(index)}>{item}</List.Item>}
//                     />
//                 </div>
//             </div>
//         );
//     }
// }

// 无状态组件
const ToDoListUi = (props) =>{
    return(
        <div>
            <div>
                <Input placeholder={props.inputValue} style={{ width: '250px', marginRight: '10px' }} onChange={props.changeInputValue} />
                <Button type="primary" onClick={props.addList}>增加</Button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => <List.Item onClick={() => props.deleteItem(index)}>{item}</List.Item>}
                />
            </div>
        </div>
    )
}

export default ToDoListUi;