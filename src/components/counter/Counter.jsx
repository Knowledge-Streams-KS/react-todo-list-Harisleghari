import { useState } from "react"

const Counter = () => {
    const [value, setValue] = useState(0)
    function handelBtnPlus(){
        setValue(value + 1)
    }
    function handelBtnMinus(){
        setValue(value - 1)
    }
return (
    <>
        <h1>Count {value}</h1>
        <button type="button" onClick={handelBtnPlus}>+</button>
        <button type="button" onClick={handelBtnMinus}>-</button>
    </>
)
}

export default Counter