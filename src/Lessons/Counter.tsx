import { useEffect, useState } from "react"

type Props = { initialCount?: number }

export const Counter = (props: Props) => {
    const [count, setCount] = useState(props.initialCount || 0)
    const [inputValue, setInputValue] = useState('')

    useEffect(()=>{})

    return <>
        <input type='text' value={inputValue} onChange={event => setInputValue(event.target.value)}></input>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(0)}>0</button>
        <button onClick={() => setCount(count + Number(inputValue))}> Add</button>
    </>
}

export const getSum = (a: number,b: number) => {
    return a+b
}

// getSum(1,2)
