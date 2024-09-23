export class HomePage {

    constructor(page) {
        this.page = page;
        this.redmineGuideLink = page.locator('strong a[href="/projects/redmine/wiki/Guide"]');
        this.forumsTab = page.locator('.boards');
        this.issuesTab = page.locator('.issues');
        this.searchInput = page.locator('#q');
    }

    async clickOnRedmineGuideLink() {
        await this.redmineGuideLink.click();
    }

    async clickOnForumsTab() {
        await this.forumsTab.click();
    }

    async clickOnIssuesTab() {
        await this.issuesTab.click();
    }

    async clickOnSearchInput() {
        await this.searchInput.click();
    }

    async setSearchInput(value) {
        await this.searchInput.fill(value);
    }
    
}