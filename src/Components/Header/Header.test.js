/// <reference types="jest" />
// @ts-nocheck
import { Header } from "./Header";
import { render, screen } from "@testing-library/react";

describe("Testing Header", () => {
    it("Header should exist", () => {
        render(<Header />)
        const headerElement = screen.getByTestId("header")
        expect(headerElement).toBeInTheDocument();
    });

    it("Header should pass title prop", () => {
        render(<Header>Testing Header</Header>);
        const headerElement = screen.getByTestId("header");
        expect(headerElement).toHaveTextContent("Testing Header");
    });

    it("Header should pass classname", () => {
        render(<Header className="header-test" />);
        const headerElement = screen.getByTestId("header");
        expect(headerElement).toHaveClass('header-test');
    });
});