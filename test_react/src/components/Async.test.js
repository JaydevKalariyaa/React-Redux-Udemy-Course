import Gretting from "./Gretting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Async from "./Async";
describe("Async Component", () => {
  test("renders posts", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "first post" }],
    });
    render(<Async />);

    const linkElement = await screen.findAllByRole("listitem");
    expect(linkElement).not.toHaveLength(0);
  });
});
