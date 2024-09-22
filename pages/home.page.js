export class HomePage {

    constructor(page) {
        this.page = page;
        this.documentationHeader = 'a[href="#Documentation"][class]';
        this.redmineGuideLink = 'strong a[href="/projects/redmine/wiki/Guide"]';
        this.forumsTab = 'a[href="/projects/redmine/boards"]';
    }

    async clickOnRedmineGuideLink() {
        await this.page.click(this.redmineGuideLink);
    }

    async clickOnForumsTab() {
        await this.page.click(this.forumsTab);
    }
    
}