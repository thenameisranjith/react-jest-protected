import { screen, render } from "@testing-library/react";
import LoginTest from "./LoginTest";

test("render login component", () => {
  render(<LoginTest />);
  const findButton = screen.getByRole("button", {
    name: "Login",
  });
  expect(findButton).toBeInTheDocument();
});

test("not render button", () => {
  render(<LoginTest />);
  const notTofindButton = screen.queryByRole("button", {
    name: "Start Learning",
  });
  expect(notTofindButton).not.toBeInTheDocument();
});
