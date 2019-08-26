import { Selector, t} from "testcafe"
import BasePage from "./basePage"
import { baseUrl } from "../config/configFile"

//in fact, this is supplementary functions page

class OrderPage extends BasePage {

    constructor(){
        super();
    }

    url: string = `${baseUrl}`;
    cartButton = Selector('[id="cart"]')
    confirmOrderButton = Selector(':nth-of-type(1) [name="confirm_order"]')
    accountDropdown = Selector('[class="account dropdown"]')
    orderHistory = Selector('[href="http://ip-5236.sunline.net.ua:38015/order_history"]')

    async confirmOrder(): Promise<void>{
        await t
        .pressKey('esc')
        .click(this.cartButton)
        .click(this.confirmOrderButton)
    }

    async getToCart(): Promise<void>{
        await t
        .click(this.accountDropdown)
        .click(this.orderHistory)
    }
}

export default new OrderPage();