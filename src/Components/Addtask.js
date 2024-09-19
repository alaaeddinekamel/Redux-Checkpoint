import { useDispatch} from "react-redux"
import { addtask} from "../Redux/Actions"
import { useState } from "react"

const Addtask = () => {
    const [title,setTitle] = useState('')
    const dispatch = useDispatch()

    const handleAddTask = () => {
        if (title) {
          
          dispatch(addtask(title));
          setTitle('')
        }
      }
  return (
    <div>
        <input value={title} type='text' placeholder='add new task' onChange={(e)=>setTitle(e.target.value)}/>
        <button className="add-button" onClick={handleAddTask}>Add Task</button>
    </div>
  )
}

export default Addtask