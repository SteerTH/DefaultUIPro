import React from "react";
import { render,screen } from "@testing-library/react";
import App from "../src/App";

describe('componente alert', () =>{

it('existing button', () => { 
    render(<App/>); 
    const existingBtn = screen.getByRole('button',{name:/mostrar alerta/i})
    expect(existingBtn).toBeInTheDocument

})

it('clicking button', () => { 
    render(<App/>); 
    const clickBtn = screen.getByRole('button',{name:/mostrar alerta/i})
    act(()=>{
        clickBtn.click();
    });

    const showing = screen.getByRole('b',{name:/mostrar alerta/i})
    expect(existingBtn).toHaveBeenCalled();
})

it('Alert shows', () => { 
    render(<App/>); 
    const showingAlert = screen.getByRole('b',{name:/mostrar alerta/i})
    expect(existingBtn).toBeInTheDocument

})




});