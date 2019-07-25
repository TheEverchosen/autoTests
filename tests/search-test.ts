import {ClientFunction, Selector} from 'testcafe';
import * as faker  from "faker";


const email = 'myrandommail@testmail.com'
const password = 'eKwmdnr78337'
const successMsg = 'You are now logged in as My User';


fixture `Search`
    .page `http://ip-5236.sunline.net.ua:38015/create_account`
    .beforeEach (async t => {
        await t
            .click('[class="account dropdown"]')
            .typeText('[placeholder="Email Address"]', email)
            .typeText('[placeholder="Password"]', password)
            .click('[name="login"]')
    });

test('Search test', async t => {
    
    await t
    .typeText('.form-control ', 'Duck')
    .pressKey('enter')

    let temp = await Selector(".products").innerText;

    await t
    .expect(temp).contains("Duck")
});

