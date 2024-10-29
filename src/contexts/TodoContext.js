import React from "react";
import { useContext , createContext } from "react";
 
export const TodoContext = React.createContext({
    todos : [{
        id : '1',
        todo : "msg for to do",
        completed : false,
    }],
    addTodo : (todo)=>{},
    updateTodo : (id , todo) => {},
    deleteTodo : (id)=>{},
    toggleComplete : (id)=>{}
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider