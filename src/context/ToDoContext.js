import { useContext, createContext } from 'react'

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
    toggleCompleted: (id) => { }
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider