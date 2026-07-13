import { render, screen } from "@testing-library/react";
import Button from "../button";

describe("Button", () => {
  it("should render children", () => {
    render(<Button>Klick mich</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Klick mich");
  });

  it("should apply primary variant by default", () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("bg-neutral-900");
  });

  it("should apply secondary variant", () => {
    render(<Button variant="secondary">Test</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("bg-white");
  });

  it("should apply outline variant", () => {
    render(<Button variant="outline">Test</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("border");
  });

  it("should apply size classes", () => {
    render(<Button size="lg">Test</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("px-10");
  });

  it("should pass additional props", () => {
    render(<Button disabled>Test</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
