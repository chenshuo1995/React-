import React, { useState, useEffect } from 'react';

// Array.prototype.selfFilter =  function selfFilter(fn,context) {
//     if (typeof fn !== "function") {
//         throw new TypeError(`${fn} is not a function`);
//     }
//     let arr = this;
//     let temp = [];

//     for (let i = 0; i < arr.length; i++) {
//         let result = fn.call(context, arr[i], i, arr);
//         if (result) temp.push(arr[i]);
//     }
//     return temp;
// }

function Example() {

    const [count, setcount] = useState(0);

    const [arr, setArr] = useState([
        { id: 1, status: 0, title: '离线' }, 
        { id: 2, status: 1, title: '在线' },
        { id: 3, status: 2, title: '在线' }
    ]);

    const addArr = () => {
        setArr(
            [
                ...arr,
                { id: 2, status: 1, title: '在线' }
            ]
        )
    }
    useEffect(() => {
        document.title = `You click ${count} times`
        console.log('来了老弟')
        return () => {
            console.log('溜了溜了')
        }
    }, [count])

    return (
        <div>
            <p>You click {count} tiems</p>
            <button onClick={() => setcount(count + 1)}>click me</button>
            <button onClick={addArr}>add arr</button>
            <ul>
                {arr.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>

        </div>
    )
}

export default Example;