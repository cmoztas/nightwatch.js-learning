const fs = require('fs');

module.exports = {
    '@tags': ['instagram'],
    'Instagram get username, remove saved posts and write to file if its doesnt exists on file'(browser)
    {
        const instagramUsername = 'YOUR_USERNAME';
        const instagramPassword = 'YOUR_PASSWORD';
        const usernameInput = 'input[name="username"]';
        const passwordInput = 'input[name="password"]';
        const submitButton = 'button[type="submit"]';
        const avatar = 'span[data-testid="user-avatar-link"]';
        const savedLink = 'a[href="/' + instagramUsername + '/saved/"]';
        const allPostsDiv = 'div[aria-label="Tüm Gönderiler"]'; // "All Posts" for English
        const firstLink = 'article > div > div >div > div > a"]';
        const contentPopupUsernameSelector = 'div[role="presentation"] header span a';
        const saveIconButton = 'svg[aria-label="Kaldır"]'; // "Remove" for English
        const nextPostButton = 'svg[aria-label="İleri"]'; // "Next" for English
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
                .pause(2500);
        }

    }
}