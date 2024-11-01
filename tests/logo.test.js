import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

test('renders specific image', () =>{

render(<App/ >);
const imageElement = screen.getByAltText(/logo/i)
expect(imageElement).toBeInTheDocument();


});