var expect = require('chai').expect;
var LoginPage = require('./classes/login_page');
var LoginPage = require ('./classes/login_spec');

describe('login form', function () {
    it('deve negar o acesso com creds errados', function () {
        LoginPage.open('https://www.youse.com.br/users/email_verifications/new');
        LoginPage.username.setValue('//*[@id="email"]', 'widefun@outlook.com');
        LoginPage.click('/html/body/div[2]/article/form/div/input', 'PRÓXIMO PASSO');
        LoginPage.password.setValue('//*[@id="user_password"]', 'Dev#001@#$$');        
        LoginPage.submit('/html/body/div[2]/article/form/div/input');

        expect(LoginPage.flash.getText('/html/body/div[1]/div/div[2]')).to.contain('Email ou senha inválidos');
    });

    it('deve permitir o acesso com creds corretos', function () {
        LoginPage.open('https://www.youse.com.br/users/email_verifications/new');
        LoginPage.username.setValue('//*[@id="email"]', 'widefun@outlook.com');
        LoginPage.click('/html/body/div[2]/article/form/div/input', 'PRÓXIMO PASSO');
        LoginPage.password.setValue('//*[@id="user_password"]', 'Dev#001@#$$');
        LoginPage.submit('/html/body/div[2]/article/form/div/input');

        expect(LoginPage.flash.getText('/html/body/div[1]/div/div[2]')).to.contain('Login efetuado com sucesso.');
    });
});