export class InstallingRedminePage {

    constructor(page) {
        this.page = page;
        this.prebuiltInstallerRubyMRILink = 'a[href="http://rubyinstaller.org"]';
    }

    async clickOnPrebuiltInstallerRubyMRILink() {
        await this.page.click(this.prebuiltInstallerRubyMRILink);
    }
    
}