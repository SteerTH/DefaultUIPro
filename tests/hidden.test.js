import React from "react";
import { render,screen } from "@testing-library/react";
import App from "../src/App";

test('is there a hidden text?', () => {

    render(<App/>);

    const hiddenText = screen.queryByText(/boo!/i)
    expect(hiddenText).not.toBeInTheDocument();



});
