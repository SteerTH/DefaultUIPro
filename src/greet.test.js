import React from "react";
import { screen,render } from "@testing-library/react";
import greeting from "./greeting";

describe('greeting component', () =>{

it('renders greet msg w name', () => {
render(<greeting name="Johnny"/>)

const greetMsg = screen.getByText(/Hello, Johnny!/i)
expect(greetMsg).toBeInTheDocument();

})

})