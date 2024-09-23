export class InstallingRedminePage {

    constructor(page) {
        this.page = page;
        this.prebuiltInstallerRubyMRILink = page.locator('a[href="http://rubyinstaller.org"]');
    }

    async clickOnPrebuiltInstallerRubyMRILink() {
        await this.prebuiltInstallerRubyMRILink.click();
    }
    
}