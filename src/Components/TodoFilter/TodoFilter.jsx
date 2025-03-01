import React, { useMemo } from 'react';
import { Header } from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../Store/slicers';
import './TodoFilter.css';

const TodoFilter = () => {
    const { todoList, filter } = useSelector(state => state.todo);
    const dispatch = useDispatch();
    const filters = [
        {id: "all", label: "All"},
        {id: "complete", label: "Complete"},
        {id: "incomplete", label: "Incomplete"}
    ]
    const handleOnFilterChange = (e) => {
        const selectedFilter = filters.find(f => f.label === e.target.value);
        if (selectedFilter) {
            dispatch(setFilter(selectedFilter.id));
        }
    };

    const stats = useMemo(() => ({
        total: todoList.length,
        incomplete: todoList.filter(todo => todo.status === "Complete").length,
        complete: todoList.filter(todo => todo.status === "Incomplete").length
    }), [todoList]);

    return (
        <div className='filters'>
            <Header className="todo-filter-header">Filter Todos</Header>
            <div className='filter-selector-container'>
                <select 
                    id="filter-selector"
                    value={filters.find(f => f.id === filter)?.label || ''}
                    onChange={handleOnFilterChange}    
                >
                    {filters.map((key) => (
                        <option 
                            key={key.id}
                            id={key.id}
                            value={key.label}
                        >{key.label}</option>
                    ))}
                </select>
            </div>
            <div className='stats-container'>
                <p className='p-total'>Total: {stats.total}</p>
                <p className='p-complete'>Complete: {stats.complete}</p>
                <p className='p-incomplete'>Incomplete: {stats.incomplete}</p>
            </div>
        </div>
    )
}

export default TodoFilter