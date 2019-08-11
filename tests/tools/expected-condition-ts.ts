import {t} from "testcafe";

const DEFAULT_TIMEOUT = 5000;

/**
 * Wait the specified amount of time in milliseconds
 * @param ms - Amount of time to wait in milliseconds
 */
export async function wait(ms: number) {
    await t.wait(ms);
}

/**
 * Check if the element is visible in the page.
 * @param element - Page element to check if visible.
 * @param timeout - Amount of time to wait for element to be visible
 * @returns Promise(boolean)
 */
export async function isVisible(
    element: Selector,
    timeout: number = DEFAULT_TIMEOUT
): Promise<boolean> {
    return (await element.exists) && element.visible;
}

/**
 * Wait for the specified element to exist.
 * If the timeout is reached an Error will be thrown.
 * @param element - Page element to wait for
 * @param ms - (Optional - uses default if not specified) Amount of time to wait in milliseconds
 * @param throwError - (Optional - defaults to true) Throw an error if element does not exist
 * @returns Promise (boolean)
 */
export async function waitForElementToExist(
    element: Selector,
    ms: number = DEFAULT_TIMEOUT,
    throwError: boolean = true
): Promise<boolean> {
    let exists = await element.exists;
    let waitTime = 0;
    const waitInterval = 250;
    while (!exists && waitTime < ms) {
        waitTime += waitInterval;
        await this.wait(waitInterval);
        exists = await element.exists;
    }
    if (!exists && throwError) {
    throw new Error(
        `Timeout expired waiting ${ms}ms for element '${element.name}'
        to exist using identifier '${element.name}'`
    );}
    return exists;
}

/**
 * Wait for the specified element to be visible.
 * If the timeout is reached an Error will be thrown.
 * @param element - Page element to wait for
 * @param ms - (Optional - uses default if not specified) Amount of time to wait in milliseconds
 * @param throwError - throw error, by default - false
 * @returns Promise (boolean)
 */
export async function waitForElementToBeVisible(
    element: Selector,
    ms: number = DEFAULT_TIMEOUT,
    throwError: boolean = false
): Promise<boolean> {
    const waitInterval = 250;
    let visible = await this.isVisible(element, waitInterval);
    let waitTime = 0;
    while (!visible && waitTime < ms) {
        waitTime += waitInterval;
        await this.wait(waitInterval);
        visible = await this.isVisible(element, waitInterval);
    }

if (!visible && throwError) {
    throw new Error(
        `Timeout expired waiting ${ms}ms for element '${element.name}'
        to be visible using identifier '${element.name}'`
    );
}

    return visible;
}