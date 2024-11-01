import React from "react";
import { render, screen, act } from "@testing-library/react";
import App from "./App";
 
describe('App Component', () => {
 
    it('should have hidden text initially', () => {
        render(<App/>);
 
        const hiddenText = screen.queryByText(/boo!/i);
        expect(hiddenText).not.toBeInTheDocument();
    });
 
    it('should reveal text when the button is clicked', () => {
        render(<App/>);
 
        const button = screen.getByRole('button', { name: /Cl1ck m3!/i });
        act(() => {
            button.click();
        });
 
        const visibleText = screen.queryByText(/boo!/i);
        expect(visibleText).toBeInTheDocument();
    });
 
    it('should check text visibility after clicking button again', () => {
        render(<App/>);
 
        const button = screen.getByRole('button', { name: /Cl1ck m3!/i });
        act(() => {
            button.click();
        });
 
        let visibleText = screen.queryByText(/boo!/i);
        expect(visibleText).toBeInTheDocument();
 
        act(() => {
            button.click();
        });
 
        visibleText = screen.queryByText(/boo!/i);
        expect(visibleText).not.toBeInTheDocument();
    });
 
});