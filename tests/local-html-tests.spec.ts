import { test, expect } from '@playwright/test';
const path=require('path');

test.beforeEach(async ({page})=>{
    const filePath=`file://${path.resolve('html/dummy-order.html')}`;
    await page.goto(filePath);
}
)
test('Basic button test', async ({ page }) => {

    const userName=await page.locator('#username')
    const email=await page.getByPlaceholder('Enter your email')
    const btn=await page.locator('button')
    const popup =await page.locator('#popup-message')

    await expect(btn).toBeDisabled()
    await userName.fill('user1')
    await email.fill('abcd@mail.com')
    await expect(btn).toBeEnabled()
    await btn.click()
    await expect(popup).toBeVisible()
    await expect(popup).toHaveText('OK')
    expect(await popup.innerText()).toBe('OK')

    // Expect a title "to contain" a substring.
    //await expect(page).toHaveTitle(/Playwright/);
});

test ('Email field validation test', async ({page}) => {
    const userName=await page.locator('#username')
    const email=await page.getByPlaceholder('Enter your email')
    const btn=await page.locator('button')

    const invalidEmailOptions=[
        '',
        'qwerty',
        'qwerty@qwerty',
        'qwerty.qwerty',
    ]

    const validEmailOption='qwerty@qwerty.qwerty'

    await userName.fill('user2')
    await await expect(btn).toBeDisabled()
    for(const emailValue of invalidEmailOptions){//цикл for
        await email.fill(emailValue)
        await expect(btn).toBeDisabled()
    }

    await email.fill(validEmailOption)
    await expect(btn).toBeEnabled()
})