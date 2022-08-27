module.exports = {
    'My first test case': function (browser)
    {
        browser
            .url('https://news.ycombinator.com/')
            .waitForElementVisible('.hnname')
            .assert.textContains('.hnname', 'Hacker News')
    }
}