import {t} from "testcafe";

export class AssertionsTC {

    /**
     * Assert the actual string contains the expected string
     * @param actual Actual value
     * @param expected Expected value
     * @param message Message to display if the assertion fails
     *
     * Example:
     * ```ts
     * await assert.contains('playground', 'ground');
     * ```
     */
    async contains(
        actual: string | undefined,
        expected: string | undefined,
        message?: string
    ): Promise<void> {
        await t.expect(actual).contains(expected, message);
    }

    /**
     * Assert the actual and expected values are deeply equivalent
     * @param actual Actual value
     * @param expected Expected value
     * @param message Message to display if the assertion fails
     *
     * Example:
     * ```ts
     * await assert.equals(1, 1);
     * ```
     */
    async equals(actual: any, expected: any, message?: string): Promise<void> {
        await t.expect(actual).eql(expected, message);
    }

    /**
     * Assert the condition resolves to false.
     * A value of true will fail the assertion.
     * @param condition Boolean resolved value
     * @param message Message to display if the assertion fails
     *
     * Example:
     * ```ts
     * const expectingFalse: boolean = getFalse();
     * await assert.falsy(expectingFalse);
     * ```
     */
    async falsy(condition: boolean, message?: string): Promise<void> {
        await t.expect(condition).notOk(message);
    }

    /**
     * Assert the condition resolves to true.
     * A value of false will fail the assertion.
     * @param condition Boolean resolved value
     * @param message Message to display if the assertion fails
     *
     * Example:
     * ```ts
     * const expectingTrue: boolean = getTrue();
     * await assert.truthy(expectingTrue);
     * ```
     */
    async truthy(condition: boolean, message?: string): Promise<void> {
        await t.expect(condition).ok(message);
    }
}

export const assert = new AssertionsTC();