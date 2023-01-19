import { screen, render } from "@testing-library/react";
import FormData from "./FormData";

test("form data todo", () => {
  const todo = { id: 1, taskName: "clean house" };
  render(<FormData todo={todo} />);
  const linkElement = screen.getByTestId("todo-1");
  expect(linkElement).toBeInTheDocument();
  const linkElement1 = screen.getByText(/formdata/i);
  expect(linkElement1).toBeInTheDocument();
});
