import React, { useState, useMemo, useCallback } from 'react';
import {useSelector} from "react-redux";
import './TodoList.css';
import ToDoResults from '../ToDoResults/ToDoResults';
import ToDoItemSection from '../ToDoItemSection/ToDoItemSection';

const TodoList = () => {
  const { todoList, filter } = useSelector(state => state.todo);
  const [value, setValue] = useState("");


  const handleValueChange = useCallback((e) => {
    setValue(e.target.value);
  }, [])

  const handleOnSubmit = useCallback(() => {
    setValue("");
  }, []);

  const todoFilter = useMemo(() => {
    switch (filter) {
        case "complete":
            return todoList.filter(todo => todo.status === "Complete");
        case "incomplete":
            return todoList.filter(todo => todo.status === "Incomplete");
        default:
            return todoList;
    }
}, [filter, todoList]);

  return (
    <div className="todo-list-container">
        <ToDoResults data={todoFilter} />
        <ToDoItemSection value={value} onChange={handleValueChange} onSubmit={handleOnSubmit} />
    </div>
  )
}

export default TodoList