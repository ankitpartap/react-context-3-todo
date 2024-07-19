import { useConext, createContext } from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "To Do Message",
            completed: false,
        }
    ],
    addTodo: (todo) => { },
    updateToDo: (id, todo) => { },
    deleteToDo: (id) => { },
    toggleComplete: (id) => { }
})

export const useTodo = () => {
    return useConext(TodoContext)
}

export const Todoprovider = TodoContext.Provider