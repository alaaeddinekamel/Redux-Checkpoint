import { useDispatch } from "react-redux"
import { deleteTask, isdone } from "../Redux/Actions"

const Task = ({task}) => {
    const dispatch = useDispatch()
  return (
    <div className="todo-item">
      
          <h3 className={task.isDone && "done"}>{task.title}</h3>
          <div className="todo-buttons">
              <i class={task.isDone ? "fa-solid fa-circle-xmark fa-xl" : "fa-solid fa-check fa-xl"} onClick={()=>dispatch(isdone(task.id))}></i>
              <i class="fa-solid fa-trash fa-xl" onClick={()=>dispatch(deleteTask(task.id))}></i>
          </div>
      
    </div>
  )
}

export default Task