import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { PracticePage } from '../pages/PracticePage';

test('logs in, selects Monday, and chooses Zara', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('student', 'Password123');

  const homePage = new HomePage(page);
  await expect(homePage.accountButton).toBeVisible();
  await homePage.openPractice();

  await expect(page).toHaveURL(/practice\.html$/);

  const practicePage = new PracticePage(page);

  const monday = practicePage.dayCheckbox('Monday');
  await practicePage.selectDay('Monday');
  await expect(monday).toBeChecked();

  const zaraValue = await practicePage.selectBrand('Zara');
  await expect(practicePage.brandDropdown).toHaveValues([zaraValue]);
});