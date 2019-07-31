import {ClientFunction, Selector} from 'testcafe';
import * as faker  from "faker";
import {email, password} from "./passwordGen"

//td: move creds to separate file and import
//const email = 'myrandommail@testmail.com'
//const password = 'eKwmdnr78337'
const successMsg = 'You are now logged in as My User';

fixture `Search`
    .page `http://ip-5236.sunline.net.ua:38015/`
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

test('Search sorting test', async t => {
    
    await t
    .typeText('.form-control ', 'Duck')
    .pressKey('enter')
    .click('[href="http://ip-5236.sunline.net.ua:38015/search?query=Duck&page=1&sort=price"]');

    let temp = await Selector(".products").innerText;
    let priceArray = temp.replace(/[^z0-9]/g, ' ').split(' ').filter(Number).sort();
    console.log("AHAHAAH: ", priceArray);
    

    await t
    .expect(temp).contains("Duck")
    .expect(priceArray.slice(1).every((item, i) => priceArray[i] <= item)).ok();

});


