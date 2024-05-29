import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/vagas");

  await expect(page).toHaveTitle(/Trabalhe no elo7/);
});

test("scroll to jobs", async ({ page }) => {
  await page.goto("/vagas");

  await page.getByRole("link", { name: "Vagas em aberto" }).click();

  await expect(page).toHaveURL(/#vagas/);
});
