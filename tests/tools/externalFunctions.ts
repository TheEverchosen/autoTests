import {ClientFunction, Selector, t} from 'testcafe';
import {email, password} from './passwordGen'

export async function login() {
    await t
        .click('[class="account dropdown"]')
        .typeText('[placeholder="Email Address"]', email)
        .typeText('[placeholder="Password"]', password)
        .click('[name="login"]')
        
}

export async function logout() {
    await t
        .click('[class="account dropdown"]')
        .click('[href="http://ip-5236.sunline.net.ua:38015/logout"]')
}