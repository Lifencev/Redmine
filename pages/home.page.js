export class HomePage {

    constructor(page) {
        this.page = page;
        this.documentationHeader = 'a[href="#Documentation"][class]';
        this.redmineGuideLink = 'strong a[href="/projects/redmine/wiki/Guide"]';
    }

    async clickOnRedmineGuideLink() {
        await this.page.click(this.redmineGuideLink);
    }
    
}