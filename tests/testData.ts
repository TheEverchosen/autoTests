import * as faker from "faker";
import {CustomerDetails} from "./pages/registrationPage";
import {OrderDetails} from "./pages/orderPage"

const password = faker.internet.password(10);
export const validCustomerData: CustomerDetails = {
    company: faker.company.companyName(),
    firstName: faker.name.findName(),
    lastName: faker.name.lastName(),
    countryCode: 'UA',
    email: faker.internet.email(),
    password: password,
    confirmPassword: password
};

export const validOrderData: OrderDetails = {
    productName: 'Duck'
};