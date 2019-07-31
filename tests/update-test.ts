import {ClientFunction, Selector} from 'testcafe';
import * as faker  from "faker";
import {generatePassword, password, email} from "./passwordGen"


const axios = require('axios');

//TD: create separate BEFORE which would register separate user just for this test case. Also 
// separate this out into a different test suit
//const email = 'myrandommail2@testmail.com'
//var password = '12345678'
var newPassword = ''
var testPassword = 'AHAHAH'
//const successMsg = 'You are now logged in as My User';


fixture `Order confirmation`
    .page `http://ip-5236.sunline.net.ua:38015/`
    .beforeEach (async t => {
    await t    
        .click('[class="account dropdown"]')
        .typeText('[placeholder="Email Address"]', email)
        .typeText('[placeholder="Password"]', password)
        .click('[name="login"]');
})
    .afterEach(async t => {
    await t
        .click('[class="account dropdown"]')
        .click('[href="http://ip-5236.sunline.net.ua:38015/logout"]')
        console.log("Old password: ", testPassword)
        testPassword = newPassword;
        console.log("New password: ", testPassword)
})

// Editng name test
/*
test('Edit name test', async t => {
   await t 
    .click('[class="account dropdown"]')
    .click('[href="http://ip-5236.sunline.net.ua:38015/edit_account"]')

    // edit name
    .typeText('[name="firstname"]', "First", {replace:true})
    .typeText('[name="lastname"]', "Last", {replace:true})

    // fill in everything else because site is bs
    .typeText('[name="address1"]', "Purely Test Purposes str")
    .typeText('[name="city"]', "City 17")
    .typeText('[name="phone"]', faker.phone.phoneNumberFormat(0))
    .typeText('input[name="postcode"]', faker.address.zipCode("#####"))
    .click('[name="save_details"]')
    .wait(10000)
}); */

test('Order test', async t => {
    await t     
    newPassword = generatePassword(10);

})
