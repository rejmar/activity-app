import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header component tests", () => {
  it("renders learn react link", () => {
    render(<Header />);
    expect(screen.getByText(/Feeling bored?/i)).toBeDefined();
    expect(screen.getByText(/Find me an activity!/)).toBeDefined();
  });
});
