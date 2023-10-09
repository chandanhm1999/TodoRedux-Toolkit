import {createSlice, nanoid} from "@reduxjs/toolkit"  


//nanoid its like a uuid or uniqueid it wil createes!

const initialState = {
    todos: [{id: 1, text: "Hello!", completed:true}],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }//26.144
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => 
            todo.id !== action.payload)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer