import { render, screen } from "@testing-library/react";
import Heading from "../heading";

describe("Heading", () => {
  it("should render as h2 by default", () => {
    render(<Heading>Test Headline</Heading>);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("should render as h1 when specified", () => {
    render(<Heading as="h1">Title</Heading>);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("should render as h3 when specified", () => {
    render(<Heading as="h3">Subtitle</Heading>);
    expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
  });

  it("should apply custom className", () => {
    render(<Heading className="text-red-500">Test</Heading>);
    const heading = screen.getByRole("heading");
    expect(heading.className).toContain("text-red-500");
  });
});
