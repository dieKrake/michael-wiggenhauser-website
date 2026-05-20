import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("should navigate to all main pages", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Michael Wiggenhauser/);

    await page.click('a[href="/leistungen"]');
    await expect(page).toHaveURL("/leistungen");
    await expect(page.locator("h1")).toContainText("Wir schaffen Wohnen");

    await page.click('a[href="/ueber-mich"]');
    await expect(page).toHaveURL("/ueber-mich");
    await expect(page.locator("h1")).toContainText("Über mich");

    await page.click('a[href="/aktuelles"]');
    await expect(page).toHaveURL("/aktuelles");
    await expect(page.locator("h1")).toContainText("Aktuelles");

    await page.click('a[href="/kontakt"]');
    await expect(page).toHaveURL("/kontakt");
    await expect(page.locator("h1")).toContainText("Kontakt");
  });

  test("should show hero section on homepage", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toContainText("Moderne Fertighäuser");
  });
});
