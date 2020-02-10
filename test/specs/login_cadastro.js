describe('Acessar o site da Youse', () => {
    it('Ir para a Url', () => {
        browser.url('https://youse.com.br');
        const title = browser.getTitle();            
    });

    describe('Acessando o area de cadastro do usuario', () => {
        it('Ir para a tela de cadastro', function (){
            browser.url('https://youse.com.br');
            $('/html/body/div[1]/div[1]/div/div[1]/div/div/div[2]/a').click();
            browser.pause(3000);         
        });
    });

/*---------------Cadastrando Usuário na Youse---------------------*/    

    describe('Cadastrando usuario na Youse', () => {
        it('Cadastrar um novo usuario', function (){
            $('/html/body/div[2]/a[1]').click();            
            $('//*[@id="user_name"]').addValue('username_cadastrado');
            $('//*[@id="user_email"]').addValue('email_cadastrado');
            $('//*[@id="user_password"]').addValue('senha_cadastrada');
            $('//*[@id="user_password_confirmation"]').addValue('confirmar_senha_cadastrada');
            $('/html/body/div[2]/article/form/div/input').click();
            browser.pause(2000);            
        });
    });
});

/*--------------Realizar login na Youse--------------------*/
var assert = require('assert');

describe('Realizar login na Youse', () => {
    it('Ir para a Url', () => {
        browser.url('https://youse.com.br');
        const title = browser.getTitle()        
        //assert.strictEqual(title, 'Seguro Auto, Residencial e Vida | Youse, Seguros Online Tipo Vc')
        $('/html/body/div[1]/div[1]/div/div[1]/div/div/div[2]/a').click();
        browser.pause(1500);
        $('//*[@id="email"]').addValue('email_cadastrado')
        $('/html/body/div[2]/article/form/div/input').click();
        browser.pause(1000);
        $('//*[@id="user_password"]').addValue('senha_cadastrada');
        $('/html/body/div[2]/article/form/div/input').click();
        browser.pause(1000);
        var pageUrl = browser.getUrl();
        assert.notEqual(pageUrl, 'https://www.youse.com.br/users/sign_in?email=widefun%40outlook.com');
        assert.equal(pageUrl, 'https://www.youse.com.br/account')
        
    });    
});



