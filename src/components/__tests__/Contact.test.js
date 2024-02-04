import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom';

describe("Test Cases for Contact Us Page", () => {
    it('Should load contact us component', () => {
        render(<Contact />); //first this will render to the jsDom

        const heading = screen.getByRole("heading"); //here screen have the access to the <Contact> component

        expect(heading).toBeInTheDocument();
    })

    it('Should load button inside contact us component', () => {
        render(<Contact />); //first this will render to the jsDom

        const button = screen.getByRole("button"); //here screen have the access to the <Contact> component

        //Assertion
        expect(button).toBeInTheDocument();
    })

    it('Should load 2 input boxes contact us component', () => {
        render(<Contact />); //first this will render to the jsDom

        //querying
        const inputBoxes = screen.getAllByRole("textbox"); //here screen have the access to the <Contact> component
        //return [] of reactElement /representing the Virtual Dom Object /fibre node
        //Assertion
        expect(inputBoxes.length).toBe(2);
        // expect(inputBoxes.length).not.toBe(3);
    })

})
