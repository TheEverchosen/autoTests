import {ClientFunction, Selector} from 'testcafe';
import * as faker  from "faker";



fixture `Login page`
    .page `http://ip-5236.sunline.net.ua:38015/create_account`;

test('Fourth homework test', async t => {
    
    const email = 'myrandommail@testmail.com'
    const password = 'eKwmdnr78337'
    const successMsg = 'You are now logged in as My User';

    await t
    .click('[class="account dropdown"]')
    .typeText('[placeholder="Email Address"]', email)
    .typeText('[placeholder="Password"]', password)
    .click('[name="login"]')

    const expectedText = await Selector('.alert.alert-success').innerText;
    const expectedPageUrl = ClientFunction(() => window.location.href);

    await t
        .expect(expectedText.replace(/[^A-Za-z0-9]/g, ' ').trim()).eql(successMsg)
        .expect(expectedPageUrl()).contains('');
});


//// myrandommail@testmail.com
//// eKwmdnr78337