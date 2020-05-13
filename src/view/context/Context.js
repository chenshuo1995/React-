import React, { useState } from 'react';
import MyContext from './MyContext'; // 中间间传值
import Counter from './Count';


function Example() {
    const [count, setcount] = useState(0);

    return (
        <div>
            <p>You click {count} tiems</p>
            <button onClick={() => setcount(count + 1)}>click me</button>
            <MyContext.Provider value={count}>
                <Counter />
            </MyContext.Provider>
        </div>
    )
}

export default Example;