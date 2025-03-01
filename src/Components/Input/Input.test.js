/// <reference types="jest" />
// @ts-nocheck
import { jest } from '@jest/globals';
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from './Input';

describe("Input testing", () => {
    it("should have input exists in application", () => {
        render(<Input />);
        const inputElement = screen.getByTestId("input");
        expect(inputElement).toBeInTheDocument();
    });

    it("should have input disabled", () => {
        render(<Input disabled={true} />);
        const inputElement = screen.getByTestId("input");
        expect(inputElement).toBeDisabled();
    });

    it("should have input type value", () => {
        const handleOnChange = jest.fn();
        render(<Input onChange={handleOnChange} />);
        const inputElement = screen.getByTestId("input");
        fireEvent.change(inputElement, { target: { value: "test value"} })
        expect(inputElement).toBeInTheDocument();
        expect(inputElement.value).toBe("test value");
        expect(handleOnChange).toHaveBeenCalledTimes(1);
        expect(handleOnChange).toHaveBeenCalledWith(expect.objectContaining({
            target: expect.objectContaining({
                value: "test value"
            })
        }));
    });
});