import React from "react";
import { render,screen } from "@testing-library/react";
import App from "../src/App";

test('renders learn more link', () =>{

render(<App/>);

const Hyperlink = screen.getByText(/learn react/i)
expect(Hyperlink).toBeInTheDocument();


});
