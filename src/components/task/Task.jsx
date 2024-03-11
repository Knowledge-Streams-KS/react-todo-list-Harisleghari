import { useState } from "react"
import "./task.css"

const Task = (props) => {
    const [inpt, setInpt] = useState(false)

    const checkBoxHandle = () => {
        setInpt(!inpt)
    }
    return (
        <>
            <p className={inpt && "redColor"}>{props.des}</p>
            <input type="checkbox" name="" id="" onClick={()=>{
                checkBoxHandle()
            }} />
        </>
    )
}
export default Task