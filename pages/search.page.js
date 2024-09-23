export class SearchPage {

    constructor(page) {
        this.page = page;
        this.searchInput = page.locator('p #search-input');
        this.firstResult = page.locator('#search-results dd:nth-of-type(1)');
    }
    
}