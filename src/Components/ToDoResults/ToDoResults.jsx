import React, { useCallback } from 'react'
import { TodoItem } from '../TodoItem/TodoItem';
import './ToDoResults.css'
import { Header } from '../Header/Header';
import { removeTodo, toggleAllTodos, toggleTodo } from '../../Store/slicers';
import { useDispatch } from 'react-redux';
import { Button } from '../Button/Button';

const ToDoResults = ({data}) => {
    const dispatch = useDispatch();

    const handleRemoveTodo = useCallback((id) => {
        dispatch(removeTodo(id))
    }, [dispatch]);

    const handleToggleTodo = useCallback((id) => {
        dispatch(toggleTodo({ id: id }))
    }, [dispatch]);

    const handleToggleAllTodos = useCallback(() => {
        dispatch(toggleAllTodos());
    }, [])

    return (
        <>
            <Header className="todo-results-header">Current Todo List</Header>
            <div data-testid="todo-list-results" className="todo-list-results">
                {data?.length > 0 && data.map((todo, idx) => (
                    <TodoItem 
                        key={todo.id}
                        id={todo.id}
                        name={todo.name}
                        status={todo.status}
                        onRemove={handleRemoveTodo}
                        onToggle={handleToggleTodo}
                        label="todo-item"
                    />
                ))}
                <Button onClick={handleToggleAllTodos}>Toggle all</Button>
            </div>
        </>
    )
}

export default ToDoResults