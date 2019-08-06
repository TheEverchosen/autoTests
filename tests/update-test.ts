import { ClientFunction, Selector, t } from 'testcafe';
import { login, logout } from './tools/externalFunctions';
import * as faker from "faker";

// change name here
const newFName = 'Gabrielle';
const newLName = 'Whatever';
const editButton = '[href="http://ip-5236.sunline.net.ua:38015/edit_account"]';

fixture `Updating information`
    .page `http://ip-5236.sunline.net.ua:38015/`

    //for the "proper SE" BE/AE should be done using API!
    .beforeEach (async () => {  
        await login()        
})
    .afterEach(async () => {
        await logout()
})

// Editng name test

test.skip ('Edit name test', async t => {
   await t 
    .click('[class="account dropdown"]')
    .click(editButton)

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
}); 


// test case for trying out functions
test.skip('Testing test', async t =>{
    await t
        .click('[class="account dropdown"]')
        .click(editButton)

    var expectedName = await Selector('input[name="firstname"]').value

    console.log("Name: ", expectedName)
    await t 
        .expect(expectedName.includes(newFName)).ok()
    
})
