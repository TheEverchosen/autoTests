import OrderPage from "./pages/orderPage"
import {assert} from "./assertion/assertion-ts"
import { validOrderData } from "./testData";
import { login, logout } from  "./tools/externalFunctions"

const expectedSuccessMessage = 'is successfully completed';

fixture `Order`
    .page(OrderPage.url)
    .beforeEach (async () => {
        await login()
    })
    .afterEach(async () => {
        await logout()
    })

    test('Order test', async t => {
        await OrderPage.createOrder(validOrderData);
        await assert.contains(await OrderPage.getSuccessMessage(), expectedSuccessMessage)
    });

    test('Confirm order history', async t => {
        await OrderPage.createOrder(validOrderData);
        const orderNumber = await OrderPage.getOrderNumber();
        await OrderPage.getToCart();
        const lastOrder = await OrderPage.getLastOrder();
        await assert.contains(lastOrder, orderNumber)
    })

