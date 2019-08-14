import { Selector} from 'testcafe';
import { login, logout } from './tools/externalFunctions';

fixture `Search`
    .page `http://ip-5236.sunline.net.ua:38015/`
    .beforeEach (async () => {
        await login()
    })
    .afterEach (async () => {
        await logout()
    })

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

    await t
    .expect(temp).contains("Duck")
    .expect(priceArray.slice(1).every((item, i) => priceArray[i] <= item)).ok();

});


