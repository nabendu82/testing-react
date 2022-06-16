import React, { useState } from 'react'

const Counter = ({ max }) => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1 data-testid="count-value">{count}</h1>
            <button 
                disabled={count >= max} 
                onClick={() => setCount(count + 1)}
            >Increment</button>
            {count >= max && <h2 style={{color: 'red'}}>Max Range Reached</h2>}
        </>
    )
}

export default Counter