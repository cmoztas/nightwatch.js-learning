module.exports = {
    '@tags': ['google'],
    'Google advanced search: Elon Musk'(browser)
    {
        const mainQuery = 'Elon Musk'
        const mainQueryInputSelector = 'input[name="as_q"]';
        const languageDropdownOpenerSelector = '#lr_button';
        const languageDropdownValueSelector = '.goog-menuitem[value="lang_it"]';
        const lastUpdateDropdownOpenerSelector = '#as_qdr_button';
        const lastUpdateValueSelector = '.goog-menuitem[value="m"]';
        const submitButton = '.jfk-button[type="submit"]';
        const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;
        const searchDetailsSelector = '#hdtbMenus';


        browser
            .url('https://www.google.com/advanced_search')
            .setValue(mainQueryInputSelector, mainQuery)
            .click(languageDropdownOpenerSelector)
            .click(languageDropdownValueSelector)
            .click(lastUpdateDropdownOpenerSelector)
            .click(lastUpdateValueSelector)
            .pause(5000)
            .click(submitButton)
            .pause(20000)
            .assert.urlContains('as_q=Elon+Musk', 'Query is Elon Musk')
            .assert.urlContains('lr=lang_it', 'Language is Italian')
            .assert.urlContains('as_qdr=m', 'Time period is last month')
            .assert.visible(resultsPageQuerySelector, 'UI: Elon Musk is set in the query')
            .assert.textContains(searchDetailsSelector, 'İtalyanca sayfalarda ara', 'UI: Italian is set in the query')
            .assert.textContains(searchDetailsSelector, 'Son 1 ay', 'UI: Last month is set in the query')
            .saveScreenshot('tests_output/google.png')
    }
}