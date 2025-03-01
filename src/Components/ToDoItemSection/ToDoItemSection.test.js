/// <reference types="jest" />
// @ts-nocheck
import { jest } from '@jest/globals';
import { render, screen, fireEvent } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import todoSlicer from '../../Store/slicers';
import { Provider } from 'react-redux';
import ToDoItemSection from './ToDoItemSection';

const createMockStore = (initialState = {}) => {
    return configureStore({
        reducer: {
            todo: todoSlicer
        },
        preloadedState: initialState
    });
};

describe("Testing ToDoItemSection", () => {
    const mockProps = {
        value: '',
        onChange: jest.fn(),
        onSubmit: jest.fn()
    };

    it("should render if TodoItemSection exists", () => {
        // Create initial state that matches your reducer's structure
        const initialState = {
            todo: {
                todoList: [],
                filter: 'all'
            }
        };
        
        const store = createMockStore(initialState);
        
        const { rerender } = render(
            <Provider store={store}>
                <ToDoItemSection {...mockProps} />
            </Provider>
        );
        
        const container = screen.getByTestId("todo-list-section");
        expect(container).toBeInTheDocument();
        expect(container).toContainElement(screen.getByTestId("form"));
        
        rerender(
            <Provider store={store}>
                <ToDoItemSection {...mockProps} />
            </Provider>
        );
    });
});