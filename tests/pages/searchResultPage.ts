import { Selector, t} from "testcafe"
import BasePage from "./basePage"
import { baseUrl } from "../config/configFile"


// For now, searchresult and order page are the same
// TD: Separate them out later (though likely to be inefficient)
class SearchResultPage extends BasePage {

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
    orderHistory = Selector('[href="http://ip-5236.sunline.net.ua:38015/order_history"]') // replace with url
    lastOrder = Selector('.table tbody :first-child')

    async createOrder(): Promise<void>{
        await t
        .click(this.blueDuck)
        .click(this.addProductButton)
        .click(this.closeButton)
    }
}

export default new SearchResultPage();