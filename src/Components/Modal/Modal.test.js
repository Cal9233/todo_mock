/// <reference types="jest" />
// @ts-nocheck
import { jest } from '@jest/globals';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { Modal } from './Modal';
import React from 'react';

describe("Modal testing", () => {
    it("should not render Modal when isOpen is false", () => {
        render(<Modal isOpen={false} />);
        const modalElement = screen.queryByTestId("modal");
        expect(modalElement).not.toBeInTheDocument();
    });

    it("should render Modal when isOpen is true", () => {
        render(<Modal isOpen={true} />);
        const modalElement = screen.getByTestId("modal");
        expect(modalElement).toBeInTheDocument();
    });

    it("should close Modal when opened and then onClose set to true", async () => {
        const TestWrapper = () => {
            const [isOpen,setIsOpen] = React.useState(true);
            const handleClose = () => setIsOpen(false);
            return <Modal isOpen={isOpen} onClose={handleClose} />
        };
        render(<TestWrapper />);
        const modalElement = screen.getByTestId("modal");
        expect(modalElement).toBeInTheDocument();
        const closeButton = screen.getByTestId("modal-close-btn");
        userEvent.click(closeButton);
        await waitFor(() => {
            expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
        })
    });
});