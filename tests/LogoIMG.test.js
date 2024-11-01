import React from "react";
import { render,screen } from "@testing-library/react";
import App from "../src/App";


test('renders logo image', () => {

render(<App/>);

const LogoImg = screen.getByRole(/img/i)

expect(LogoImg).toBeInTheDocument()


});
