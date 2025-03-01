/// <reference types="jest" />
// @ts-nocheck
import { jest } from '@jest/globals';
import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "./TodoItem";

describe("Testing TodoItem Component", () => {
    const mockProps = {
        id: "123",
        name: "Test Todo",
        status: "Incomplete",
        onRemove: jest.fn(),
        onToggle: jest.fn(),
        label: "todo-item"
    };

    it("should render correctly with required props", () => {
        const { rerender } = render(<TodoItem {...mockProps} />);
        const container = screen.getByLabelText("todo-item");
        expect(container).toBeInTheDocument();
        expect(container).not.toHaveClass("Complete")
        rerender(<TodoItem {...mockProps} status="Complete" />);
        expect(container).toHaveClass("Complete")
    });

    it("should remove with correct ID when remove button is clicked", () => {
        render(<TodoItem {...mockProps}/>);
        fireEvent.click(screen.getByTestId("remove-btn"));
        expect(mockProps.onRemove).toHaveBeenCalledWith("123")
    });

    it("calls onToggle with correct ID when status is clicked", () => {
        render(<TodoItem {...mockProps} />);
        fireEvent.click(screen.getByTestId("toggle-status-p"));
        expect(mockProps.onToggle).toHaveBeenCalledWith("123")
    });

    it("applies the correct aria-label", () => {
        render(<TodoItem label="todo item" />);
        const todoItem = screen.getByLabelText("todo item");
        expect(todoItem).toBeInTheDocument()
    });
});