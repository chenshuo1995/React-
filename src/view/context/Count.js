
import React, { useContext } from 'react';
import MyContext from './MyContext';


function Counter(){
    const count = useContext(MyContext)
    return(
        <h2>{count}</h2>
    )
}

export default Counter;