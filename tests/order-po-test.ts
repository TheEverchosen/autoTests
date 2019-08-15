import OrderPage from "./pages/orderPage"
import {assert} from "./assertion/assertion-ts"
import { validOrderData } from "./testData";
import { login } from  "./tools/externalFunctions"

const expectedSuccessMessage = 'is successfully completed';

fixture `Order`
    .page(OrderPage.url)
    .beforeEach (async t => {
        await login()
    })

    test('Order test', async () => {
        await OrderPage.createOrder(validOrderData);
        await assert.contains(await OrderPage.getSuccessMessage(), expectedSuccessMessage)
    });