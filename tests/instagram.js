const fs = require('fs');

module.exports = {
    '@tags': ['instagram'],
    'Instagram remove saved posts'(browser)
    {
        const instagramUsername = 'YOUR_USERNAME';
        const instagramPassword = 'YOUR_PASSWORD';
        const usernameInput = 'input[name="username"]';
        const passwordInput = 'input[name="password"]';
        const submitButton = 'button[type="submit"]';
        const avatar = 'span[data-testid="user-avatar-link"]';
        const savedLink = 'a[href="/YOUR_USERNAME/saved/"]';
        const allPostsDiv = 'div[aria-label="Tüm Gönderiler"]';
        const firstLink = 'a[href="YOUR_LAST_SAVED_POST_ID_LINK_AFTER_INSTAGRAM_LINK(STARTS_WITH: /p/POST_ID/)"]';
        const contentPopupUsernameSelector = 'div[role="presentation"] header span a';
        const saveIconButton = 'svg[aria-label="Kaldır"]';
        const nextPostButton = 'svg[aria-label="İleri"]';
        const defaultPostAmount = 9999;

        browser
            .url('https://www.instagram.com/')
            .setValue(usernameInput, instagramUsername)
            .pause(1500)
            .setValue(passwordInput, instagramPassword)
            .pause(2000)
            .click(submitButton)
            .pause(15000)
            .click(avatar)
            .pause(1000)
            .click(savedLink)
            .pause(2000)
            .click(allPostsDiv)
            .pause(3000)
            .click(firstLink)
            .pause(2000);

        for (let i = 0; i < defaultPostAmount; i++)
        {
            browser
                .getText(contentPopupUsernameSelector, (result) =>
                {
                    fs.readFile('./reports/instagram.txt', (err, content) =>
                    {
                        if (err)
                        {
                            console.log(err);
                        }

                        if (content.indexOf(result.value) !== -1)
                        {
                            console.log(result.value, 'is already exists in file');
                        } else
                        {
                            let stream = fs.createWriteStream('./reports/instagram.txt', { flags: 'a' });
                            stream.write(result.value + '\n');
                            stream.end();
                        }
                    })

                })
                .pause(500)
                .click(saveIconButton)
                .pause(2500)
                .click(nextPostButton)
                .pause(3500);
        }

    }
}