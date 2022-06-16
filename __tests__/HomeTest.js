import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../pages/index";

describe("<Home/>", () => {
  it("Check for Getting Started Text", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Get started by editing")).not.toBeInTheDocument();
  });
  it("Renders appropriately", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: "Welcome to Ginko !!!!" })
    ).toBeInTheDocument();
  });
});
