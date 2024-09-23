export class RedmineGuidePage {

    constructor(page) {
        this.page = page;
        this.installingRedmineLink = page.locator('a[href="/projects/redmine/wiki/RedmineInstall"]');
    }

    async clickOnInstallingRedmineLink() {
        await this.installingRedmineLink.click();
    }
    
}