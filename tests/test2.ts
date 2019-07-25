import {ClientFunction, Selector} from 'testcafe';
import * as faker  from "faker";

let successMsg = 'Your customer account has been created';

fixture `Registration page`
    .page `http://ip-5236.sunline.net.ua:38015/create_account`;

test('My first registration test', async t => {
    const email = faker.internet.email();
    await t
        .typeText('input[name="firstname"]', 'First Name')
        .typeText('input[name="lastname"]', 'Last Name')
        .click('.form-control[name="country_code"]')
        .click(Selector('option').withAttribute('value', 'UA'))
        .typeText('[name="customer_form"] [name="email"]', email)
        .typeText('[name="customer_form"] [name="password"]', email)
        .typeText('[name="customer_form"] [name="confirmed_password"]', email)
        .click('[name="newsletter"]')
        .click('[name="create_account"]');
    const expectedText = await Selector('.alert.alert-success').innerText;
    const expectedPageUrl = ClientFunction(() => window.location.href);
    await t
        .expect(expectedText.replace(/[^A-Za-z0-9]/g, ' ').trim()).eql(successMsg)
        .expect(expectedPageUrl()).contains('');
});
