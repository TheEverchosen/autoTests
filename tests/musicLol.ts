import {ClientFunction, Selector} from 'testcafe';
import { login } from './tools/externalFunctions';

const successMsg = 'You are now logged in as Gabrielle Hansen';

fixture `Login page`
    //.page `https://music.apple.com/ua/playlist/rock-workout/pl.8d242be9aec24ae191687f05251d2001`;
    .page `https://music.youtube.com/`

test('Login test', async t  => {
    
    //let musicList = await Selector('.product-hero__tracks').innerText
    //musicList = musicList.replace(/\d:*/g, '')
    //let musicListFinal = musicList.split('\n').filter(String)
    //console.log(musicListFinal)

    await t
    .wait(5000)
    //.navigateTo('https://music.youtube.com/')
    .click('[title="Initiate search"]')
    //[title='More actions']
});

