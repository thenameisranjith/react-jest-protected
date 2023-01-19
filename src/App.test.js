import { render, screen } from "@testing-library/react";
import App from "./App";

test("search the name ranjith", () => {
  render(<App />);
  const linkElement = screen.getByText(/Change theme/i);
  expect(linkElement).toBeInTheDocument();
});
