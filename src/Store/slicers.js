import { createSlice } from '@reduxjs/toolkit';

const initialTodoState = {
    todoList: [],
    todoInputValue: ""
};

export const todoSlicer = createSlice({
    name: "todo",
    initialTodoState,
    reducers: {
        // Add Todo

        // Remove Todo

        // Update Todo

        // Toggo Todo

        // Saved Todos
    }
});

// Uncomment when actions are created
// export const { } = todoSlicer.actions
export default todoSlicer.reducer;