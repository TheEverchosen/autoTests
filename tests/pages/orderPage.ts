import { Selector, t} from "testcafe"
import BasePage from "./basePage"
import { baseUrl } from "../config/configFile"

class OrderPage extends BasePage {

    constructor(){
        super();
    }

    searchBar = Selector('.form-control')
    searchButton = Selector('enter')
    blueDuck = Selector('[data-name="Blue Duck"]')
    addProductButton = Selector('[name="add_cart_product"]')
    closeButton = Selector('.featherlight-close-icon')
    cartButton = Selector('[id="cart"]')
    confirmOrderButton = Selector(':nth-of-type(1) [name="confirm_order"]')
    successOrderText = Selector('.box').innerText
}