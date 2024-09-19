import { ADDTASK, DELETETASK, ISDONE } from "./ActionsType"

export const addtask=(payload)=>{
    return(
        {
            type : ADDTASK,
            payload
        }
    )
}


export const isdone=(payload)=>{
    return(
        {
            type : ISDONE,
            payload
        }
    )
}

export const deleteTask=(payload)=>{
    return(
        {
            type : DELETETASK,
            payload
        }
    )
}