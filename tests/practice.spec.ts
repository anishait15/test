import { test, expect } from '@playwright/test';

test('Scenario 2: verifies every column in Example 1', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/tables');

  const example1 = page
    .getByRole('heading', { name: 'Example 1', exact: true })
    .locator('xpath=..');
  const table = example1.getByRole('table');

  await expect(table.getByRole('row')).toHaveText([
    'Last Name First Name Email Due Web Site Action',
    'Smith John jsmith@gmail.com $50.00 http://www.jsmith.com Edit Delete',
    'Bach Frank fbach@yahoo.com $51.00 http://www.frank.com Edit Delete',
    'Doe Jason jdoe@hotmail.com $100.00 http://www.jdoe.com Edit Delete',
    'Conway Tim tconway@earthlink.net $50.00 http://www.timconway.com Edit Delete',
  ]);
});

