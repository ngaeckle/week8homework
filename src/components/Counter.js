import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)

    function increment (incrementor){
        setCount(count + incrementor)
    }

    return (
        <div>
            Cars: {count}
            <button onClick={() => increment(1)}>Add</button>
            {
                (count > 0) ? 
                <button onClick={() => increment(-1)}>Subtract</button>
                :
                <></>
            }
        </div>
    ) 
}