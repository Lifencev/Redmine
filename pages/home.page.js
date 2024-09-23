export class HomePage {

    constructor(page) {
        this.page = page;
        this.redmineGuideLink = page.locator('strong a[href="/projects/redmine/wiki/Guide"]');
        this.forumsTab = page.locator('.boards');
        this.issuesTab = page.locator('.issues');
        this.newsTab = page.locator('.news');
        this.searchInput = page.locator('#q');
        this.paginationLastPageBtn = page.locator('.pagination li:nth-last-child(2)');
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

    async clickOnNewsTab() {
        await this.newsTab.click();
    }

    async clickOnSearchInput() {
        await this.searchInput.click();
    }

    async clickOnPaginationLastPageBtn() {
        await this.paginationLastPageBtn.click();
    }

    async setSearchInput(value) {
        await this.searchInput.fill(value);
    }
    
}