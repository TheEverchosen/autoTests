import { Selector, t} from "testcafe"
import BasePage from "./basePage"
import { baseUrl } from "../config/configFile"

class OrderPage extends BasePage {

    constructor(){
        super();
    }

    url: string = `${baseUrl}`;
    searchBar = Selector('.form-control')
    searchButton = 'enter'
    blueDuck = Selector('[data-name="Blue Duck"]')
    addProductButton = Selector('[name="add_cart_product"]')
    closeButton = Selector('.featherlight-close-icon')
    cartButton = Selector('[id="cart"]')
    confirmOrderButton = Selector(':nth-of-type(1) [name="confirm_order"]')
    successOrderText = Selector('.box')

    async createOrder(orderDetails: OrderDetails): Promise<void>{
        await t
        .typeText(this.searchBar, orderDetails.productName)
        .pressKey(this.searchButton)
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
}

export interface OrderDetails{
    productName: string
}

export default new OrderPage();