import { screen, render } from "@testing-library/react";
import Skills from "./Skills";

const skills = ["wakeup", "bath", "tiffan", "office"];

test("render skill component", () => {
  render(<Skills skills={skills} />);
  const checkText = screen.getByText("skill");
  expect(checkText).toBeInTheDocument();
});

test("render list of skills", () => {
  render(<Skills skills={skills} />);
  const listOfItems = screen.getAllByRole("listitem");
  expect(listOfItems).toHaveLength(skills.length);
});
