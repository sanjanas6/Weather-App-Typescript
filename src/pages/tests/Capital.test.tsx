import {render, screen } from "@testing-library/react";
import Capital from "../Capital";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

const mockData = {
    location: {
    name:'New Delhi'
    },
    current: {
    condition: {text:'cold'},
    feelslike_c: 32 ,
    pressure_in: 2343
    }}

const MockCapital = () => {
  return (
    <BrowserRouter>
      <Capital state= {mockData}/>
    </BrowserRouter>
  );
};

describe("Capital weather", () => {
  test("Capital weather ",() => {
    render(<MockCapital/>);
     const component = screen.getByTestId("capital-data");
    //  expect(thirstInfo()).toBeTruthy();
     expect(component.childNodes).toBeTruthy();
  });
});
