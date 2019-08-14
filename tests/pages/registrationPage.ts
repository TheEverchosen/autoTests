import {Selector, t} from "testcafe";
import BasePage from "./basePage";
import {baseUrl} from "../config/configFile";

class RegistrationPage extends BasePage {

    constructor() {
        super();
    }

    url: string = `${baseUrl}create_account`;
    company = Selector('input[name="company"]');
    firstNameInput = Selector('input[name="firstname"]');
    lastNameInput = Selector('input[name="lastname"]');
    countryCodeInput = Selector('.form-control[name="country_code"]');
    zoneCodeInput = Selector('.form-control[name="zone_code"]');
    emailInput = Selector('[name="customer_form"] [name="email"]');
    passwordInput = Selector('[name="customer_form"] [name="password"]');
    confirmPasswordInput = Selector('[name="customer_form"] [name="confirmed_password"]');
    newsButton = Selector('[name="newsletter"]');
    createAccountButton = Selector('[name="create_account"]');
    successRegistrationMessage = Selector('.alert.alert-success');

    async registerNewUser(customerDetails: CustomerDetails): Promise<void> {
        // Mandatory fields
        await t
        .typeText(this.firstNameInput, customerDetails.firstName)
        .typeText(this.lastNameInput, customerDetails.lastName )
        .click(this.countryCodeInput)
        .click(Selector('option').withAttribute('value', customerDetails.countryCode))
        .typeText(this.emailInput, customerDetails.email)
        .typeText(this.passwordInput, customerDetails.password)
        .typeText(this.confirmPasswordInput, customerDetails.confirmPassword);
        // Optional
        if (customerDetails.company) {
            await t.typeText(this.company, customerDetails.company)
        }
        await t
        .click(this.newsButton)
        .click(this.createAccountButton);
    }

    async getRegistrationSuccessMessage(): Promise<string> {
        const expectedText = await this.successRegistrationMessage.innerText;
        return  expectedText.replace(/\W/g, ' ').trim();
    }
}

export interface CustomerDetails {
    company?: string
    firstName: string;
    lastName: string;
    countryCode: string;
    zoneCode?: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default new RegistrationPage();