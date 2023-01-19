import { render, screen } from "@testing-library/react";
import UserCard from "./UserCard";

test("render usercard", () => {
  render(<UserCard />);
  const linkElement = screen.getByText("usercard");
  expect(linkElement).toBeInTheDocument();
});

test("recived props from component", () => {
  render(<UserCard name="kumar" type="star" />);
  const linkElement = screen.getByText("usercard kumar");
  expect(linkElement).toBeInTheDocument();
});
