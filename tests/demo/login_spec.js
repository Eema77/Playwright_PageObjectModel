import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login'

test('test', async ({ page }) => {

  const Login = new LoginPage(page)

  Login.gotoLoginPage()
  Login.login('tomsmith','SuperSecretPassword!')

  // await page.locator('body').click();
  // await page.goto('https://the-internet.herokuapp.com/login');
  // await page.getByLabel('Username').click();
  // await page.getByLabel('Username').fill('tomsmith');
  // await page.getByText('Password', { exact: true }).click();
  // await page.getByLabel('Password').click();
  // await page.getByLabel('Password').fill('SuperSecretPassword!');
  // await page.getByRole('button', { name: ' Login' }).click();
});