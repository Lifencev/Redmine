import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { RedmineGuidePage } from '../pages/redmineGuide.page';
import { InstallingRedminePage } from '../pages/installingRedmine.page';
import { RubyInstallerPage } from '../pages/rubyInstaller.page';
import { ForumsPage } from '../pages/forums.page';
import { SearchPage } from '../pages/search.page';
import { IssuesPage } from '../pages/issues.page';
import { LastNewsPage } from '../pages/lastNews.page';

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

    test('Checking the first search result for presence the word that was used in the search', async ({page}) => {
        await page.goto('/');

        const homePage = new HomePage(page);
        await homePage.clickOnSearchInput();
        await homePage.setSearchInput('haskell');
        await page.keyboard.press('Enter');

        const searchPage = new SearchPage(page);
        await expect(searchPage.searchInput).toHaveValue('haskell');
        await expect(searchPage.firstResult).toContainText('haskell');
    });

    test('Adding an "Author" column for issues from the "Issues" tab and applying the changes', async ({page}) => {
        await page.goto('/');

        const homePage = new HomePage(page);
        await homePage.clickOnIssuesTab();

        const issuesPage = new IssuesPage(page);
        await issuesPage.clickOnOptions();
        await issuesPage.clickOnAuthorOption();
        await issuesPage.clickOnRightArrow();
        await issuesPage.clickOnApplyBtn();

        await expect(issuesPage.options).toHaveClass('icon icon-collapsed');
        await expect(issuesPage.authorColumn).toBeInViewport();
        await issuesPage.checkClickableAuthorColumn();
    });

    test('Checking the oldest news from "News" tab using pagination', async ({page}) => {
        await page.goto('/');

        const homePage = new HomePage(page);
        await homePage.clickOnNewsTab();
        await homePage.clickOnPaginationLastPageBtn();

        const lastNewsPage = new LastNewsPage(page);
        await expect(lastNewsPage.lastNews).toHaveText('New Redmine web site');
        await expect(lastNewsPage.lastNews).toHaveAttribute('href', '/news/1');
    });

});