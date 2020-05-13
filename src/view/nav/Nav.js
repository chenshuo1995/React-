import React, { Component } from 'react';
import XiaoJieJie from '../../XiaoJieJie';
import ToDoList from '../../ToDoList';
import ToDoList1 from '../../ToDoList1';
import Hooks from '../hooks/Hooks';
import Context from '../context/Context';
import Reducer from '../reducer/Reducer';
import Resize from '../resize/Resize';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const routeConfig = [
    {path:'/home/index',title:'React基础',exact:true,component:XiaoJieJie},
    {path:'/home/redux',title:'Redux基础',exact:false,component:ToDoList},
    {path:'/home/react-redux',title:'React-Redux',exact:false,component:ToDoList1},
    {path:'/home/hooks',title:'Hooks',exact:false,component:Hooks},
    {path:'/home/context',title:'Context',exact:false,component:Context},
    {path:'/home/reducer',title:'Reducer',exact:false,component:Reducer},
    {path:'/home/resize',title:'Resize',exact:false,component:Resize},
]

class Nav extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
                <ul className="menuList nav">
                    {
                        routeConfig.map((item,index)=>{
                            return(
                                <li key={index}><Link to={item.path}>{item.title}</Link></li>    
                            )
                        })
                    }
                </ul>
                <div className="right">
                    {
                        routeConfig.map((item,index)=>{
                            return(
                                <Route key={index} path={item.path} exact={item.exact} component={item.component} />
                            )
                        })
                    }
                </div>
            </Router>
        );
    }
}
 
export default Nav;