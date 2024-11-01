import React from "react";
import { render,screen,act } from "@testing-library/react";
import App from "../src/App";

test('is there a hidden text?', () => {

    render(<App/>);

    const hiddenText = screen.queryByText(/boo!/i);
    expect(hiddenText).not.toBeInTheDocument();

    const button = screen.getByRole('button',{name:/Cl1ck m3!/i});
    act(() => {
        button.click();
    });

    const visibleText = screen.queryByText(/boo!/i);
    expect(visibleText).toBeInTheDocument();


});

test('unhidden text', () => {

    render(<App/>);


    const button = screen.getByRole('button',{name:/Cl1ck m3!/i});
    act(() => {
        button.click();
    });

    const visibleText = screen.queryByText(/boo!/i);
    expect(visibleText).toBeInTheDocument();


});
