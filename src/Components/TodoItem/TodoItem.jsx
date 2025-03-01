import React, {memo} from 'react';
import { withTodoTracking } from '../HOC/withTodoTracking';
import './TodoItem.css';

export const TodoItemBase = memo(({ id, name, status, onRemove, onToggle, label, trackAction }) => {
    const handleOnToggle = () => {
        trackAction('toggle', id, name);
        onToggle(id)
    };
    const handleOnRemove = () => {
        trackAction("remove", id, name);
        onRemove(id);
    }
    return (
        <div aria-label={label} className={`todo-container ${status === "Complete" ? "Complete" : ""}`}>
            <div className="todo-header">
                <div className="todo-title">{name}</div>
                <span data-testid="remove-btn" className="btn-end-icon" onClick={handleOnRemove}>x</span>
            </div>
            <p 
                data-testid="toggle-status-p"
                className={`todo-status ${status === "Complete" ? "Complete" : ""}`}
                onClick={handleOnToggle}
                >{status}</p>
        </div>
    )
}, (prevProps, nextProps) => {
    return (
        prevProps.id === nextProps.id &&
        prevProps.name === nextProps.name &&
        prevProps.status === nextProps.status &&
        prevProps.label === nextProps.label
    )
});

TodoItemBase.defaultProps = {
    label: "todo-item",
    trackAction: () => {}
}

export const TodoItem = withTodoTracking(TodoItemBase)