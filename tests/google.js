module.exports = {
    '@tags': ['google'],
    'Google advanced search: Elon Musk'(browser)
    {
        const mainQuery = 'Elon Musk';
        const page = browser.page.googleAdvancedSearch();

        page
            .navigate()
            .setQuery(mainQuery)
            .selectFilter('@languageDropdown', 'lang_it')
            .selectFilter('@lastUpdateDropdown', 'm')
            .search();

        browser
            .assert.urlContains('as_q=Elon+Musk', 'URL: Query is Elon Musk')
            .assert.urlContains('lr=lang_it', 'URL: Language is Italian')
            .assert.urlContains('as_qdr=m', 'URL: Time period is last month');

        const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;
        const searchDetailsSelector = '#hdtbMenus';

        browser
            .assert.visible(resultsPageQuerySelector, 'UI: Elon Musk is set in the query')
            .assert.textContains(searchDetailsSelector, 'İtalyanca sayfalarda ara', 'UI: Italian is set in the query')
            .assert.textContains(searchDetailsSelector, 'Son 1 ay', 'UI: Last month is set in the query')
            .saveScreenshot('tests_output/google.png')
    }
}