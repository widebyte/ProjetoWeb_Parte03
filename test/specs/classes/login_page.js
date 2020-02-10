import Page from './page';

class LoginPage extends LoginSpec {

    get username()  { return browser.element('#username'); }
    get password()  { return browser.element('#password'); }
    get form()      { return browser.element('#login'); }
    get flash()     { return browser.element('#flash'); }

    open() {
        super.open('login');
    }

    submit() {
        this.form.submitForm();
    }

}

export default new LoginPage();