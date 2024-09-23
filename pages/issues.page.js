import { expect } from '@playwright/test';

export class IssuesPage {

    constructor(page) {
        this.page = page;
        this.options = page.locator('fieldset#options legend');
        this.authorOption = page.locator('#available_c [value="author"]');
        this.rightArrow = page.locator('.move-right');
        this.applyBtn = page.locator('.buttons .icon.icon-checked');
        this.authorColumn = page.locator('th.author');
    }

    async clickOnOptions() {
        await this.options.click();
    }

    async clickOnAuthorOption() {
        await this.authorOption.click();
    }

    async clickOnRightArrow() {
        await this.rightArrow.click();
    }

    async clickOnApplyBtn() {
        await this.applyBtn.click();
    }

    async checkClickableAuthorColumn() {
        await expect(this.authorColumn).toBeVisible();
        await expect(this.authorColumn).toBeEnabled();
    }
    
}