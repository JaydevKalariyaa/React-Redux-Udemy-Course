import Gretting from "./Gretting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
describe("Gretting Component", () => {
  test("checks 'Gretting' keyword", () => {
    render(<Gretting />);
    const linkElement = screen.getByText("Gretting");
    expect(linkElement).toBeInTheDocument();
  });
  test("when button is clicked, hello is not printed", () => {
    render(<Gretting />);
    const button = screen.getByRole("button");
    userEvent.click(button);

    const word = screen.queryByText("hello");
    expect(word).toBeNull();
  });
});
