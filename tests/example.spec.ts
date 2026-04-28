import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // const userName=await page.locator('[role=textbox][placeholder="Enter your username"]')
  // const email=await page.locator('[role=textbox][placeholder="Enter your email"]')
  // const btn=await page.locator('[id="submit-order"]')
  //
  // await userName.fill('1234')
  // await email.fill('abcd@mail.com')
  // await expect(btn).toBeEnabled()

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const link=page.getByRole('link', { name: 'Get started' })
  // Click the get started link.
  await link.click();

  const heading=page.getByRole('heading', { name: 'Installation' })

  // Expects page to have a heading with the name of Installation.
  await expect(heading).toBeVisible();
});

test('GitHub is visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const gitBtn=await page.locator('[aria-label="GitHub repository"]')
  await expect(gitBtn).toBeVisible();
});

test('Discord is visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const discordBtn=await page.locator('[aria-label="Discord server"]')
  await expect(discordBtn).toBeVisible();
});

test('Switch is visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const switchBtn=await page.locator('[aria-label="Switch between dark and light mode (currently system mode)"]')
  await expect(switchBtn).toBeVisible();
});
