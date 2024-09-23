export class LastNewsPage {

    constructor(page) {
        this.page = page;
        this.lastNews = page.locator('article.news-article:nth-last-of-type(1) h3 a');
    }
    
}