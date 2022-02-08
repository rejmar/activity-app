import { render, screen } from "@testing-library/react";
import { StateContext } from "../contexts/appContext";
import Content from "./Content";

describe("Content component tests", () => {
  it("should render with bored icon (default view)", () => {
    render(<Content />);
    expect(screen.getByAltText("bored-icon")).toBeDefined();
  });

  it("should render with happy icon (changed context value)", () => {
    render(
      <StateContext.Provider value={{ activity: "TEST" }}>
        <Content />
      </StateContext.Provider>
    );
    expect(screen.getByAltText("happy-icon")).toBeDefined();
  });
});
