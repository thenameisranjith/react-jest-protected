import { getByRole, render, screen } from "@testing-library/react";
import CounterTest from "./CounterTest";
import user from "@testing-library/user-event";

describe("counter", () => {
  test("COUNTER TEST RENDER", () => {
    render(<CounterTest />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
    const incrementButton = screen.getByRole("button", {
      name: "Add",
    });
    expect(incrementButton).toBeInTheDocument();
  });

  test("COUNTER TEST first render", () => {
    render(<CounterTest />);
    const initialCount = screen.getByRole("heading");
    expect(initialCount).toHaveTextContent("0");
  });

  test("count should increment after clicking on add button", async () => {
    user.setup();
    render(<CounterTest />);
    const incrementButton1 = screen.getByRole("button", {
      name: "Add",
    });
    await user.click(incrementButton1);
    const counterIncrease = screen.getByRole("heading");
    expect(counterIncrease).toHaveTextContent("1");
  });
});
