export class HomePage {

    constructor(page) {
        this.page = page;
        this.documentationHeader = 'a[href="#Documentation"][class]';
        this.redmineGuideLink = 'strong a[href="/projects/redmine/wiki/Guide"]';
        this.forumsTab = 'a[href="/projects/redmine/boards"]';
        this.searchInput = page.locator('#q');
    }

    async clickOnRedmineGuideLink() {
        await this.page.click(this.redmineGuideLink);
    }

    async clickOnForumsTab() {
        await this.page.click(this.forumsTab);
    }

    async clickOnSearchInput() {
        await this.searchInput.click();
    }

    async setSearchInput(value) {
        await this.searchInput.fill(value);
    }
    
}