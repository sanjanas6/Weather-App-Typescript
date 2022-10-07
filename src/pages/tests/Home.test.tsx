import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../Home";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

const MockHome = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

//describe breaks your test suite into components. 
//Depending on your test strategy, you might have a describe for each function in your class, each module of your plugin, or each user-facing piece of functionality.
describe("First Validation", () => {
  test("should check placeholder", () => {
    render(<MockHome />);
    const inputElement = screen.getByPlaceholderText(/Enter Country Name!!/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("should enable input field", () => {
    render(<MockHome />);
    const inputElement =
      screen.getByPlaceholderText<HTMLInputElement>(/Enter Country Name!!/i);
    fireEvent.change(inputElement, {
      target: { value: "india" },
    });
    //Assertions
    expect(inputElement.value).toBe("india");
  });
});
