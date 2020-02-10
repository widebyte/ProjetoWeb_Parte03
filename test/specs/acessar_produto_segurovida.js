describe('Selenionar Produto - Seguro de Vida', () => {
    
        it('Preencher login e senha', () => {
        // Login.open();
        browser.url('https://www.youse.com.br/users/email_verifications/new'); //acessar o site da youse.
        //browser.pause(1000); //pause para aguardar o carragamento da página de Login do usuário.
        console.log(browser.getUrlAndTitle());

        $('//*[@id="email"]').addValue('widefun@outlook.com'); //Entrar com o e-mail cadastrado.      
        $('/html/body/div[2]/article/form/div/input').click(); //clicar no botão Próximo Passo.
        browser.pause(1000);        
        $('//*[@id="user_password"]').addValue('Dev#001@');
        browser.pause(1000);        
        $('/html/body/div[2]/article/form/div/input').click();
        browser.pause(1000);     
        var pageUrl = browser.getUrl('https://www.youse.com.br/account');
    });

    it('identificar página', () => {
        browser.url('https://www.youse.com.br/account');

        $('/html/body/div[4]/div/div/article[3]/a').click(); //clicar no botão Cotar Seguro Auto.
        browser.pause(1500);
    });
});
