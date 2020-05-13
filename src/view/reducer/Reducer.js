import React, { useReducer } from 'react';

function Reducer(){
    const [count,dispatch] = useReducer((state,action) =>{
        switch(action){
            case 'add':
                return state+1
            case 'sub':
                return state-1
            default:
                return state    
        }
    },1)
    return(
        <div>
            <h2>累计{count}个</h2>
            <button onClick={()=>dispatch('add')}>+</button>
            <button onClick={()=>dispatch('sub')}>-</button>
        </div>
    )
}

export default Reducer;