/// <reference types="jest" />
// @ts-nocheck
import { jest } from '@jest/globals';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { Button } from "./Button";

describe("Button testing", () => {
    it("Button existing", () => {
        render(<Button />);
        const buttonElement = screen.getByTestId(/btn/);
        expect(buttonElement).toBeInTheDocument();
    });

    it("should render button selection", async () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick} />);
        const buttonElement = screen.getByTestId(/btn/);
        await userEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalled();
    });

    it("Button is disabled", async () => {
        const handleClick = jest.fn();
        render(<Button disabled={true} onClick={handleClick} />);
        const buttonElement = screen.getByTestId(/btn/);
        expect(buttonElement).toBeDisabled();
        await userEvent.click(buttonElement);
        expect(handleClick).not.toHaveBeenCalled();
    });

    it('should render a button with the class of primary', () => {
        render(<Button variant="primary" />);
        const primaryButton = screen.getByRole("button", {class: /primary/i});
        expect(primaryButton).toHaveClass('btn');
        expect(primaryButton).toHaveClass('btn-primary');
    });

    it('should render a disabled button with the class of primary', async () => {
        const handleClick = jest.fn();
        render(<Button variant="primary" disabled={true} />);
        const primaryButton = screen.getByRole("button", {class: /primary/i});
        expect(primaryButton).toHaveClass('btn');
        expect(primaryButton).toHaveClass('btn-primary');
        expect(primaryButton).toBeDisabled();
        await userEvent.click(primaryButton);
        expect(handleClick).not.toHaveBeenCalled();
    });

    it('should render a button with the class of secondary', () => {
        render(<Button variant="secondary" />);
        const secondaryButton = screen.getByRole("button", {class: /secondary/i});
        expect(secondaryButton).toHaveClass('btn');
        expect(secondaryButton).toHaveClass('btn-secondary');
    });

    it('should render a disabled button with the class of secondary', async () => {
        const handleClick = jest.fn();
        render(<Button variant="secondary" disabled={true} />);
        const secondaryButton = screen.getByRole("button", {class: /secondary/i});
        expect(secondaryButton).toHaveClass('btn');
        expect(secondaryButton).toHaveClass('btn-secondary');
        expect(secondaryButton).toBeDisabled();
        await userEvent.click(secondaryButton);
        expect(handleClick).not.toHaveBeenCalled();
    });
    
    it('should render a disabled button with the class of danger', async () => {
        const handleClick = jest.fn();
        render(<Button variant="danger" disabled={true} />);
        const dangerButton = screen.getByRole("button", {class: /danger/i});
        expect(dangerButton).toHaveClass('btn');
        expect(dangerButton).toHaveClass('btn-danger');
        expect(dangerButton).toBeDisabled();
        await userEvent.click(dangerButton);
        expect(handleClick).not.toHaveBeenCalled();
    });
});