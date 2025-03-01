import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todoList: JSON.parse(localStorage.getItem("todo")) || [],
    filter: 'all',
    user: undefined,
    toggleAll: false
};

export const todoSlicer = createSlice({
    name: "todo",
    initialState,
    reducers: {
        // Add Todo
        addTodo: (state, action) => {
            const todo = action.payload;
            const customId = state.todoList.length + 1;
            const similarTodo = state.todoList.find(x => x.name === todo.name);
            if(similarTodo){
                alert("This task already exists.");
            } else {
                todo.id = customId;
                todo.status = "Incomplete";
                state.todoList.push(todo);
                localStorage.setItem("todo", JSON.stringify(state.todoList))
            }
        },
        // Remove Todo
        removeTodo: (state, action) => {
            const id = action.payload;
            const todo = state.todoList.find(x => x.id === id)
            if(todo){
                state.todoList = state.todoList.filter(x => x.id !== id);
                localStorage.setItem("todo", JSON.stringify(state.todoList))
            }
        },
        // Update Todo

        // Toggo Todo
        toggleTodo: (state, action) => {
            const { id } = action.payload;
            state.todoList = state.todoList.map(todo =>
                todo.id === id ? { ...todo, status: todo.status === "Complete" ? "Incomplete" : "Complete" } : todo
            );
            localStorage.setItem("todo", JSON.stringify(state.todoList))
        },
        
        // Update Filter
        setFilter: (state, action) => {
            state.filter = action.payload;
        },

        // Login User
        setUser: (state, action) => {
            state.user = action.payload;
        },

        // Logout User
        logoutUser: (state) => {
            state.user = undefined;
        },

        toggleAllTodos: (state) => {
            state.toggleAll = !state.toggleAll;
            const updatedList = state.todoList.map((todo) => 
                state.toggleAll ? {...todo, status: "Complete"}
                    : {...todo, status: "Incomplete"});
            state.todoList = updatedList
        }
    }
});

export const { addTodo, removeTodo, toggleTodo, setFilter, setUser, logoutUser, toggleAllTodos } = todoSlicer.actions
export default todoSlicer.reducer;