import {ClientFunction, Selector} from 'testcafe';
import * as faker  from "faker";



fixture `Registration page`
    .page `http://ip-5236.sunline.net.ua:38015/create_account`;

test('Second homework test', async t => {
    
    const email = faker.internet.email();
    const password = faker.internet.password(10);
    const successMsg = 'Your customer account has been created';
    const usStates = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL',
     'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI',
      'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK',
       'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV',
        'WI', 'WY' ];
    const randomState = usStates[Math.floor(Math.random() * usStates.length)];
    

    await t
        .typeText('input[name="company"]', faker.company.companySuffix())
        .typeText('input[name="tax_id"]', "NL999999999B99")
        .typeText('input[name="address1"]', faker.address.streetAddress())
        .typeText('input[name="address2"]', faker.address.secondaryAddress())
        .typeText('input[name="postcode"]', faker.address.zipCode("#####"))
        .typeText('input[name="phone"]', faker.phone.phoneNumberFormat(0))
        .typeText('input[name="city"]', faker.address.city())
        .typeText('input[name="firstname"]', faker.name.firstName())
        .typeText('input[name="lastname"]', faker.name.lastName())
        .click('.form-control[name="country_code"]')
        .click(Selector('option').withAttribute('value', 'US'))
        .click('.form-control[name="zone_code"]')
        .click(Selector('option').withAttribute('value', randomState))
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
