import {ClientFunction, Selector} from 'testcafe';
import { watchFile } from 'fs';
import { waitForElementToExist } from './tools/expected-condition-ts';
const axios = require("axios")

fixture `API login`
    .page `https://www.app.trastra.com/signin`;


test('Axios test', async t => {
    
    const element = await Selector('[class="MuiGrid0318 MuiGrid0352 MuiGrid0372 full-width"]')
    await waitForElementToExist(element, 10000)

    await axios({
        method: 'post',
        url: 'https://www.app.trastra.com/signin',
        data: {
            "email":"starobelsk97@gmail.com",
            "password":"fd772e22fc11ea8f3a21faaa65c31f8cf6db91c6a36830058a3d1299b0fb4586"}
    })

    await t
    const username = await Selector('.user-menu').innerText
    await t
    .expect(username.includes('Gordon Freeman'))

})