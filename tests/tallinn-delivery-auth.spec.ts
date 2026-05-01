import { test, expect } from '@playwright/test';
import {faker} from "@faker-js/faker";
const TD_URL=process.env.TD_URL;
//const TD_URL='https://fe-delivery.tallinn-learning.ee/signin'

test.beforeEach(async ({page})=>{

        await page.goto(TD_URL);
    }
)
test('TD negative auth test1', async ({ page }) => {
    const username=page.locator('#username')
    const password=page.locator('[data-name="password-input"]')
    const signInBtn=page.locator('[data-name="signIn-button"]')
    const errorPopup=page.locator('[data-name="authorizationError-popup"]')
    const randomUsername=faker.internet.username()
    const randomPassword=faker.internet.password()


    await username.fill(randomUsername)
    await password.fill(randomPassword)
    await signInBtn.click();
    await expect(errorPopup).toBeVisible()


});