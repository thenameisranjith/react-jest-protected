import {
  getByAltText,
  getByDisplayValue,
  getByLabelText,
  getByPlaceholderText,
  getByText,
  render,
  screen,
} from "@testing-library/react";
import Dropdown from "./Dropdown";

test("Dropdown component", () => {
  render(<Dropdown />);
  const nameElement = screen.getByRole("textbox");
  expect(nameElement).toBeInTheDocument();

  const dropDownBox = screen.getByRole("combobox");
  expect(dropDownBox).toBeInTheDocument();

  const checkTerms = screen.getByRole("checkbox");
  expect(checkTerms).toBeInTheDocument();

  const submitButton = screen.getByRole("button");
  expect(submitButton).toBeInTheDocument();

  const pageHeader = screen.getByRole("heading", {
    name: "Basic Info",
  });
  expect(pageHeader).toBeInTheDocument();

  const labelName = screen.getByLabelText("Enter name");
  expect(labelName).toBeInTheDocument();

  const termsLabel = screen.getByLabelText("I agree terms and condition");
  expect(termsLabel).toBeInTheDocument();

  const valueCheck = screen.getByDisplayValue("ranjith");
  expect(valueCheck).toBeInTheDocument();

  const imageAltTest = screen.getByAltText("flower");
  expect(imageAltTest).toBeInTheDocument();
});

// ORDER USAGE
// getByRole
// getByLabelText
// getByPlaceholderText
// getByText
// getByDisplayValue
// getByAltText
// getByTitle
// getByTestId
