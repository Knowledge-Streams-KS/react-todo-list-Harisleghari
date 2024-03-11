import Task from "../task/Task"

const TaskLists = () => {
    const des = ["this is my first task", "this is my second task", "this is my third task", "this is my fourth task"]
    return (
        <>
            {des.map((ele, index) => {
                return <Task key={index} des={ele} />
            })}
        </>
    )
}

export default TaskLists