import { useSelector } from "react-redux"
import Task from "./Task"
import { useState } from "react"

const ListTask = () => {
    const tasks = useSelector(state=>state.tasks)
    const [filTask,setFilTask] = useState('all')
  return (
    
        <div>
            <div className="btnDone">
                <button onClick={()=>setFilTask('all')}>ALL</button>
                <button onClick={()=>setFilTask('done')}>DONE</button>
                <button onClick={()=>setFilTask('notdone')} >NOT DONE</button>
            </div>
           {
            tasks.length == 0 ?
            <h1>No tasks</h1>
            :
            <>
            {
                filTask == "all"?
                tasks.map((task)=> <Task task={task} />)
                :
                filTask =="done"?
                tasks.filter((task)=> task.isDone == true).map((task)=> <Task task={task} />)
                :
                tasks.filter((task)=> task.isDone == false).map((task)=> <Task task={task} />)
            }
            </>
           }
        </div>  
    )
}

export default ListTask