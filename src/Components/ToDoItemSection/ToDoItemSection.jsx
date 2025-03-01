import React, { useRef, useEffect, useCallback } from 'react';
import { Header } from '../Header/Header';
import "./ToDoItemSection.css";
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import {addTodo} from "../../Store/slicers";
import {useDispatch} from "react-redux";
import TodoFilter from '../TodoFilter/TodoFilter';
import { withTodoTracking } from '../HOC/withTodoTracking';

export const ToDoItemSectionBase = ({value, onChange, onSubmit, trackAction}) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const handleAddTodo = useCallback(() => {
    if(value.trim()){
      trackAction("Add todo", value)
      dispatch(addTodo({name: value}));
      onSubmit();
    }
  }, [value, dispatch, onSubmit, trackAction])

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef])

  return (
    <div className="todo-list-section" data-testid="todo-list-section">
      <Header className="todo-list-section-header">Add a Todo</Header>
      <div className="form" data-testid="form">
        <Input 
          type="text" 
          placeholder="Add a todo" 
          label="todo input"
          value={value}
          onChange={onChange}
          ref={inputRef}
        />
        <Button variant='secondary' size='small' type="submit" onClick={handleAddTodo}>Add</Button>
      </div>
      <TodoFilter />
    </div>
  )
}

const ToDoItemSection = withTodoTracking(ToDoItemSectionBase);

export default ToDoItemSection