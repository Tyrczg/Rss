const MailBuilder = require('../src/utils/mailbuilder');

describe('Test the mail builder', () => {
    let mailBuilder

    beforeAll( () => {
        mailBuilder = new MailBuilder()
    })

    test('It should build content of the mail', () => {

        const feeds =({
            title: "title test",
            description: "description test",
            items: ({
                title: "title",
                author: "TyrczG",
                pubDate: "now",
                contentSnippet: "no content",
                link: "http://localhost",
            })
        })

      const content = mailBuilder.build(feeds)
      expect(content).toBeTruthy()

    });
});