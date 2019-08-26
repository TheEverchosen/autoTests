import { Selector, t} from "testcafe"
import BasePage from "./basePage"
import { baseUrl } from "../config/configFile"

class CheckoutPage extends BasePage {

    constructor(){
        super();
    }

    cartButton = Selector('[id="cart"]')
    confirmOrderButton = Selector(':nth-of-type(1) [name="confirm_order"]')
    successOrderText = Selector('.box')
    orderNumber = Selector('[id="box-order-success"] h1')
    lastOrder = Selector('.table tbody :first-child')

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

}

export default new CheckoutPage();