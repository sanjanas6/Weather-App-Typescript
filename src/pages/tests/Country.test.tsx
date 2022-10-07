import {render, screen } from "@testing-library/react";
import Country from "../Country";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

const MockCountry = () => {
  return (
    <BrowserRouter>
      <Country />
    </BrowserRouter>
  );
};

  test("Must return True ", () => {
    render(<MockCountry />);
    const component = screen.getByTestId("country-data");
    //false , 0 ,'',null,undefined and NAN these are always falsy everything else is truthy
    //We can get negative of any method by just adding not before its calling0
    //toBeFalsy()   toBetruthy()
    expect(component.childNodes).toBeTruthy();
  });
