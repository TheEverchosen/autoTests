import {ClientFunction, Selector} from 'testcafe';
import { login } from './tools/externalFunctions';

const successMsg = 'You are now logged in as Gabrielle Hansen';

fixture `Login page`
    .page `http://ip-5236.sunline.net.ua:38015/`;

test('Login test', async t  => {
    
    await login()

    const expectedText = await Selector('.alert.alert-success').innerText;
    const expectedPageUrl = ClientFunction(() => window.location.href);

    await t
        .expect(expectedText.replace(/[^A-Za-z0-9]/g, ' ').trim()).eql(successMsg)
        .expect(expectedPageUrl()).contains('');
});

