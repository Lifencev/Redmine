import { expect } from '@playwright/test';

const forums = ['Open discussion', 'Help', 'Development', 'Plugins', 'Job offers'];

export class ForumsPage {

    constructor(page) {
        this.page = page;
    }

    async checkAllForums() {
        for (let i = 1; i <= forums.length; i++) {
            let forum = this.page.locator(`table.list.boards tbody tr:nth-child(${i}) a.board`);
            await expect(forum).toHaveText(`${forums[i-1]}`);
            await expect(forum).toHaveAttribute('href');
        }
    }
    
}