import {ClientFunction, t} from "testcafe";

export default class BasePage {

    /**
     * Navigate to specific url.
     * @returns Promise (void)
     */
    async navigateToUrl(
        url: string,
    ): Promise<void> {
        await t.navigateTo(url);
    }

    /**
     * Gets the current url from the browser.
     * @returns Promise (string)
     */
    getUrl = ClientFunction(() => {
        return document.location.href;
    });
}