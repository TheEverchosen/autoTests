import {ClientFunction, Selector} from 'testcafe';
import * as faker  from "faker";

fixture `Registration page`
    .page `http://ip-5236.sunline.net.ua:38015/create_account`;

test('Registration tests', async t => {
    
    const email = faker.internet.email();
    const password = faker.internet.password(10);
    const successMsg = 'Your customer account has been created';

    await t
        .typeText('input[name="firstname"]', faker.name.firstName())
        .typeText('input[name="lastname"]', faker.name.lastName())
        .click('.form-control[name="country_code"]')
        .click(Selector('option').withAttribute('value', 'UA'))
        .typeText('[name="customer_form"] [name="email"]', email)
        .typeText('[name="customer_form"] [name="password"]', password)
        .typeText('[name="customer_form"] [name="confirmed_password"]', password)
        .click('[name="newsletter"]')
        .click('[name="create_account"]');

    const expectedText = await Selector('.alert.alert-success').innerText;
    const expectedPageUrl = ClientFunction(() => window.location.href);
    await t
        .expect(expectedText.replace(/\W/g, ' ').trim()).eql(successMsg)
        .expect(expectedPageUrl()).contains('');
});

test('All fields test', async t => {
    
    const email = faker.internet.email();
    const password = faker.internet.password(10);
    const successMsg = 'Your customer account has been created';

    await t

        //address + taxid
        .typeText('input[name="company"]', faker.company.companySuffix())
        .typeText('input[name="tax_id"]', "NL999999999B99")
        .typeText('input[name="address1"]', faker.address.streetAddress())
        .typeText('input[name="address2"]', faker.address.secondaryAddress())
        .typeText('input[name="postcode"]', faker.address.zipCode("#####"))
        .typeText('input[name="city"]', faker.address.city())

        //phone no
        .typeText('input[name="phone"]', faker.phone.phoneNumberFormat(0))

        //name
        .typeText('input[name="firstname"]', faker.name.firstName())
        .typeText('input[name="lastname"]', faker.name.lastName())

        //country
        .click('.form-control[name="country_code"]')
        .click(Selector('option').withAttribute('value', 'UA'))
        
        //email + password
        .typeText('[name="customer_form"] [name="email"]', email)
        .typeText('[name="customer_form"] [name="password"]', password)
        .typeText('[name="customer_form"] [name="confirmed_password"]', password)

        //finalising
        .click('[name="newsletter"]')
        .click('[name="create_account"]');

    const expectedText = await Selector('.alert.alert-success').innerText;
    const expectedPageUrl = ClientFunction(() => window.location.href);
    await t
        .expect(expectedText.replace(/\W/g, ' ').trim()).eql(successMsg)
        .expect(expectedPageUrl()).contains('');
});

test('US registration test', async t => {
    
    //declarations
    const email = faker.internet.email();
    const password = faker.internet.password(10);
    const successMsg = 'Your customer account has been created';

    //create array of states from dropdown (an elegant technical decision)
    //var count = await Selector('[name="zone_code"] option').count;


    //select random state 
    const randomState = Math.floor(Math.random() * await Selector('[name="zone_code"] option').count);

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
        .click(await Selector('[name="zone_code"] option').nth(randomState))

        //email + password
        .typeText('[name="customer_form"] [name="email"]', email)
        .typeText('[name="customer_form"] [name="password"]', password)
        .typeText('[name="customer_form"] [name="confirmed_password"]', password)

        //finalising
        .click('[name="newsletter"]')
        .click('[name="create_account"]');

    const expectedText = await Selector('.alert.alert-success').innerText;
    const expectedPageUrl = ClientFunction(() => window.location.href);

    await t
        .expect(expectedText.replace(/\W/g, ' ').trim()).eql(successMsg)
        .expect(expectedPageUrl()).contains('');

});
