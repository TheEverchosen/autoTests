import { Selector} from 'testcafe';
import { login, logout } from './tools/externalFunctions';

fixture `Order`
    .page `http://ip-5236.sunline.net.ua:38015/`
    .beforeEach (async t => {
        await login()
    })

    .afterEach(async t => {
        await logout()
    })

test.skip('Order test', async t => {
    await t     
    .typeText('.form-control ', 'Duck')
    .pressKey('enter')
    .click('[data-name="Blue Duck"]')
    .click('[name="add_cart_product"]')
    .click('.featherlight-close-icon')
    .click('[id="cart"]')
    .click(':nth-of-type(1) [name="confirm_order"]') // no, you can't make this shorter!
    let successOrder = await Selector('.box').innerText

    await t
    .expect(successOrder.includes('is successfully completed')).ok()
})

test('Confirm order history', async t => {
    await t
    .typeText('.form-control ', 'Duck')
    .pressKey('enter')
    .click('[data-name="Blue Duck"]')
    .click('[name="add_cart_product"]')
    .click('.featherlight-close-icon')
    .click('[id="cart"]')
    .click(':nth-of-type(1) [name="confirm_order"]') // no, you can't make this shorter!

    let orderNumber = await Selector('[id="box-order-success"] h1').innerText
    orderNumber = orderNumber.replace(/[^0-9]/g, '')

    await t

    .click('[class="account dropdown"]')
    .click('[href="http://ip-5236.sunline.net.ua:38015/order_history"]')

    let lastOrder = await Selector('.table tbody :first-child').innerText

    await t
    .expect(lastOrder.includes(orderNumber)).ok()
})