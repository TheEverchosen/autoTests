import {ClientFunction, Selector} from 'testcafe';
import * as faker  from "faker";



fixture `Registration page`
    .page `http://ip-5236.sunline.net.ua:38015/create_account`;

test('Third homework test', async t => {
    

    //declarations
    const email = faker.internet.email();
    const password = faker.internet.password(10);
    const successMsg = 'Your customer account has been created';
    const usStates = [];

    //create array of states from dropdown (an elegant technical decision)
    var count = await Selector('[name="zone_code"] option').count;
        for(let i=0; i < count ;i++){
            usStates.push(await Selector('[name="zone_code"] option').nth(i).value)          
}

    //select random state 
    const randomState = usStates[Math.floor(Math.random() * usStates.length)];

    await t
        //company + phone
        .typeText('input[name="company"]', faker.company.companySuffix())
        .typeText('input[name="tax_id"]', "NL999999999B99")
        .typeText('input[name="phone"]', faker.phone.phoneNumberFormat(0))

        //address
        .typeText('input[name="address1"]', faker.address.streetAddress())
        .typeText('input[name="address2"]', faker.address.secondaryAddress())
        .typeText('input[name="postcode"]', faker.address.zipCode("#####"))
        .typeText('input[name="city"]', faker.address.city())

        //name 
        .typeText('input[name="firstname"]', faker.name.firstName())
        .typeText('input[name="lastname"]', faker.name.lastName())

        //country + state 
        .click('.form-control[name="country_code"]')
        .click(Selector('option').withAttribute('value', 'US'))
        .click('.form-control[name="zone_code"]')
        .click(Selector('option').withAttribute('value', randomState))

        //email + password + finalising
        .typeText('[name="customer_form"] [name="email"]', email)
        .typeText('[name="customer_form"] [name="password"]', password)
        .typeText('[name="customer_form"] [name="confirmed_password"]', password)
        .click('[name="newsletter"]')
        .click('[name="create_account"]');

    const expectedText = await Selector('.alert.alert-success').innerText;
    const expectedPageUrl = ClientFunction(() => window.location.href);

    await t
        .expect(expectedText.replace(/[^A-Za-z0-9]/g, ' ').trim()).eql(successMsg)
        .expect(expectedPageUrl()).contains('');
});



