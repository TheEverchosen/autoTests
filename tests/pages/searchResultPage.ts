import { Selector, t} from "testcafe"
import BasePage from "./basePage"
import { baseUrl } from "../config/configFile"

class SearchResultPage extends BasePage {

    constructor(){
        super();
    }

    url: string = `${baseUrl}`;
    blueDuck = Selector('[data-name="Blue Duck"]')
    addProductButton = Selector('[name="add_cart_product"]')
    closeButton = Selector('.featherlight-close-icon')

    async createOrder(): Promise<void>{
        await t
        .click(this.blueDuck)
        .click(this.addProductButton)
        .click(this.closeButton)
    }
}

export default new SearchResultPage();