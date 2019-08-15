import { Selector, t} from "testcafe"
import BasePage from "./basePage"
import { baseUrl } from "../config/configFile"


// For now, searchresult and order page are the same
// TD: Separate them out later (though likely to be inefficient)
class OrderPage extends BasePage {

    constructor(){
        super();
    }

    url: string = `${baseUrl}`;
    blueDuck = Selector('[data-name="Blue Duck"]')
    addProductButton = Selector('[name="add_cart_product"]')
    closeButton = Selector('.featherlight-close-icon')
    cartButton = Selector('[id="cart"]')
    confirmOrderButton = Selector(':nth-of-type(1) [name="confirm_order"]')
    successOrderText = Selector('.box')
    orderNumber = Selector('[id="box-order-success"] h1')
    accountDropdown = Selector('[class="account dropdown"]')
    orderHistory = Selector('[href="http://ip-5236.sunline.net.ua:38015/order_history"]')
    lastOrder = Selector('.table tbody :first-child')

    async createOrder(): Promise<void>{
        await t
        .click(this.blueDuck)
        .click(this.addProductButton)
        .click(this.closeButton)
        .click(this.cartButton)
        .click(this.confirmOrderButton)
    }

    async getSuccessMessage(): Promise<string>{
        const successMessage = await this.successOrderText.innerText;
        return successMessage
    } 

    async getOrderNumber(): Promise<string>{
        const orderNumber = await this.orderNumber.innerText
        return orderNumber.replace(/[^0-9]/g, '')
    }

    async getLastOrder(): Promise<string>{
        const lastOrder = await this.lastOrder
        return lastOrder.innerText
    }

    async getToCart(): Promise<void>{
        await t
        .click(this.accountDropdown)
        .click(this.orderHistory)
    }
}

export default new OrderPage();