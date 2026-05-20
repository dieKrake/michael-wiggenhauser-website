import { cn } from "../utils";

describe("cn utility", () => {
  it("should merge class names", () => {
    expect(cn("text-sm", "font-bold")).toBe("text-sm font-bold");
  });

  it("should handle conditional classes", () => {
    expect(cn("base", false && "hidden", "visible")).toBe("base visible");
  });

  it("should merge conflicting tailwind classes", () => {
    expect(cn("text-sm", "text-lg")).toBe("text-lg");
  });

  it("should handle undefined and null", () => {
    expect(cn("base", undefined, null, "end")).toBe("base end");
  });
});
