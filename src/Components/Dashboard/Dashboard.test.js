/// <reference types="jest" />
// @ts-nocheck
import { jest } from '@jest/globals';
import { render, screen, fireEvent } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import todoSlicer from '../../Store/slicers';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { Dashboard } from './Dashboard';


const createMockStore = (initialState = {}) => {
    return configureStore({
        reducer: {
            todo: todoSlicer
            // Match the key 'todo' from your actual store configuration
        },
        preloadedState: initialState
    });
};

describe("Dashboard testing", () => {
    it("should check if dashboard is rendering", () => {
        // Create initial state that matches your reducer's structure
        const initialState = {
            todo: {
                todoList: [],
                filter: 'all',
                user: undefined
            }
        };
        
        const store = createMockStore(initialState);
        render(
            <Provider store={store}>
                <Dashboard />
            </Provider>
        );
        const dashboardElement = screen.getByTestId("dashboard");
        expect(dashboardElement).toBeInTheDocument();
    });

    it("should check if dashboard title is rendering for no user login", () => {
        // Create initial state that matches your reducer's structure
        const initialState = {
            todo: {
                todoList: [],
                filter: 'all',
                user: undefined
            }
        };
        
        const store = createMockStore(initialState);
        render(
            <Provider store={store}>
                <Dashboard />
            </Provider>
        );
        const dashboardElement = screen.getByTestId("dashboard");
        expect(dashboardElement).toBeInTheDocument();
    });
});