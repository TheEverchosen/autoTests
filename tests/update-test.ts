import {ClientFunction, Selector} from 'testcafe';
import {generatePassword, password, email} from "./passwordGen"

const axios = require('axios');
const newFName = 'Gabrielle';
const newLname = 'Whatever';

fixture `Updating information`
    .page `http://ip-5236.sunline.net.ua:38015/`

    //for the "proper SE" BE/AE should be done using API!
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

    var expectedFName = await Selector('input[name="firstname"]').value
    var expectedLName = await Selector('input[name="lastname"]').value

    await t 
        .expect(expectedFName.includes(newFName)).ok()
        .expect(expectedLName.includes(newLName)).ok()
}); */

test('Testing test lol', async t =>{
    await t
        .click('[class="account dropdown"]')
        .click('[href="http://ip-5236.sunline.net.ua:38015/edit_account"]')

    var expectedName = await Selector('input[name="firstname"]').value

    console.log("Name: ", expectedName)
    await t 
        .expect(expectedName.includes(newFName)).ok()
    
})


