import RegistrationPage from "./pages/registrationPage";
import {assert} from "./assertion/assertion-ts";
import {baseUrl} from "./config/configFile";
import {validCustomerData} from "./testData";

// Define test data
const successMsg = 'Your customer account has been created';

fixture `Registration page`
    .page(RegistrationPage.url);

// Page Object example
test('Registration new user from UA', async () => {
    await RegistrationPage.registerNewUser(validCustomerData);
    await assert.equals(await RegistrationPage.getRegistrationSuccessMessage(), successMsg);
    await assert.equals(await RegistrationPage.getUrl(), baseUrl);
});