import { expect } from '@playwright/test';

export class RubyInstallerPage {

    constructor(page) {
        this.page = page;
        this.downloadBtn = page.locator('#download_btn a');
    }

    async checkClickableDownloadBtn() {
        await expect(this.downloadBtn).toBeVisible();
        await expect(this.downloadBtn).toBeEnabled();
    }
    
}