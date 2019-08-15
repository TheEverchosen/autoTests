import OrderPage from "./pages/orderPage"
import {assert} from "./assertion/assertion-ts"
import { validOrderData } from "./testData";
import { login, logout } from  "./tools/externalFunctions"
import MainPage from "./pages/mainPage"

const expectedSuccessMessage = 'is successfully completed';

fixture `Order`
    .page(OrderPage.url)
    .beforeEach (async t => {
        await login()
    })
    .afterEach(async t => {
        await logout()
    })

    test('Order test', async t => {
        await MainPage.searchForProduct(validOrderData)
        await OrderPage.createOrder();
        await assert.contains(await OrderPage.getSuccessMessage(), expectedSuccessMessage)
    });

    test('Confirm order history', async t => {
        await MainPage.searchForProduct(validOrderData);
        await OrderPage.createOrder();
        const orderNumber = await OrderPage.getOrderNumber();
        await OrderPage.getToCart();
        const lastOrder = await OrderPage.getLastOrder();
        await assert.contains(lastOrder, orderNumber)
    })

