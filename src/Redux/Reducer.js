import { ADDTASK, DELETETASK, ISDONE } from "./ActionsType"

const initialeState ={
    tasks : []
}

const tasksReducer=(state = initialeState,action)=>{
    switch (action.type) {
        case ADDTASK : return {...state, tasks : [...state.tasks, {title : action.payload, isDone : false, id : Math.random()}]}
        case ISDONE : return {...state, tasks : state.tasks.map((task)=> task.id=== action.payload ? {...task, isDone : !task.isDone} : task)}
        case DELETETASK : return {...state, tasks : state.tasks.filter((task)=>task.id !== action.payload)}
        default: return state
            
    }
}

export default tasksReducer