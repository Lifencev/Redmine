import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { RedmineGuidePage } from '../pages/redmineGuide.page';
import { InstallingRedminePage } from '../pages/installingRedmine.page';
import { RubyInstallerPage } from '../pages/rubyInstaller.page';
import { ForumsPage } from '../pages/forums.page';

test.describe('5 test-cases for redmine.org', () => {

    test('Checking prebuilt installer from notes for Windows installation through the "Redmine guide"', async ({page}) => {
        await page.goto('/');

        const homePage = new HomePage(page);
        await homePage.clickOnRedmineGuideLink();

        const redmineGuidePage = new RedmineGuidePage(page);
        await redmineGuidePage.clickOnInstallingRedmineLink();
        
        const installingRedminePage = new InstallingRedminePage(page);
        await installingRedminePage.clickOnPrebuiltInstallerRubyMRILink();

        const rubyInstaller = new RubyInstallerPage(page);
        await expect(page).toHaveURL('https://rubyinstaller.org');
        await rubyInstaller.checkClickableDownloadBtn();
    });

    test('Checking the correct order of forums and the presence of links from "Forums" tab', async ({page}) => {
        await page.goto('/');

        const homePage = new HomePage(page);
        await homePage.clickOnForumsTab();

        const forumsPage = new ForumsPage(page);
        await forumsPage.checkAllForums();
    });

});