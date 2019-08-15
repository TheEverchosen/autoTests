import { Selector, t} from "testcafe"
import BasePage from "./basePage"
import { baseUrl } from "../config/configFile"

class MainPage extends BasePage {

    constructor(){
        super();
    }

    url: string = `${baseUrl}`;
    searchBar = Selector('.form-control')
    searchButton = 'enter'
    
    async searchForProduct(orderDetails: OrderDetails): Promise<void>{
        await t
        .typeText(this.searchBar, orderDetails.productName)
        .pressKey(this.searchButton)
    }
}

export interface OrderDetails{
    productName: string
}

export default new MainPage();