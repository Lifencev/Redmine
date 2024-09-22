export class RedmineGuidePage {

    constructor(page) {
        this.page = page;
        this.installingRedmineLink = 'a[href="/projects/redmine/wiki/RedmineInstall"]';
    }

    async clickOnInstallingRedmineLink() {
        await this.page.click(this.installingRedmineLink);
    }
    
}