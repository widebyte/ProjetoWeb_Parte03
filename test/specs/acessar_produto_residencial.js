//import Login from './classes/login_spec';
//const LoginClass = new Login();

describe('Selenionar Produto', () => {
    it('Selecionar o seguro residencial', () => {
        // Login.open();
        browser.url('https://youse.com.br'); //acessar o site da youse.
        $('/html/body/div[1]/div[1]/div/div[1]/div/div/div[2]/a').click(); //CSS para clicar no ícone de acesso.
        browser.pause(1000); //pause para aguardar o carragamento da página de Login do usuário.
        $('//*[@id="email"]').addValue('email_cadastrado'); //preenchendo o campo E-mail.
        $('/html/body/div[2]/article/form/div/input').click(); // clicando no botão PRÓXIMO PASSO.
        browser.pause(1000); //aguardar o aparecimento do campo senha.
        $('//*[@id="user_password"]').addValue('senha_cadastrada'); //preenchendo o campo da senha.
        $('/html/body/div[2]/article/form/div/input').click(); //clicando no botão ENTRAR.
        browser.pause(1000);
        var pageUrl = browser.getUrl(); //verificar o carregamento da página logada.
        /*-----------------------Clicando na opção - SEGURO RESIDENCIAL----------------*/
        $('/html/body/div[4]/div/div/article[1]/a').click();
        browser.pause(1500); 
    });

    it('Verificar o título da página acessada - Serguro Residencial', function () {
        browser.url('https://www.youse.com.br/home/order/fb3a32e4-2117-4d37-b22a-c9b70180f1fe');
        var title = browser.getTitle()
        console.log(title);
    })    

    it('Criar o seguro', function () {
        $('/html/body/section/form/fieldset[3]/input').click();
        browser.pause(16000);
        const title = browser.getTitle();
        browser.elementClick('/html/body/section[1]/form/fieldset/input');
        $('//*[@id="coverages__selected_lmi"]').click();      

    });    

    describe('Utilizando botão do seguro para escolher o valor', () => {
        it('Escolher o valor do seguro residencial', () => {
            browser.url('https://www.youse.com.br/home/order/e8243272-3c2d-4df5-8d24-1d7b75d9ed73/coverages_selection');
            const frame1 = $('/html/body/section[1]/form/ul[1]/li[1]/div[2]/div[3]/div[2]/div');
            browser.switchToFrame(frame1);
            const drag = $('draggable');
            drag.waitForExist(5000);
            console.log(drag);
            const drop = $('droppable');
            console.log(drop);
            drag.dragAndDrop(drop, 5000);
            browser.pause(8000);

            $('/html/body/section[1]/form/fieldset/input').click();
            browser.pause(2000);
            $('/html/body/section[1]/form/div/fieldset/input').click();
            browser.pause(2000);

            $('/html/body/section[1]/form/div/section[1]/div/div[2]/div[2]/div[1]/div[2]/div/label').click();
            browser.pause(1000);
            $('/html/body/section[1]/form/div/section[1]/div/div[3]/div[2]/div[1]/div[2]/div/label').click();
            browser.pause(1000);
            $('/html/body/section[1]/form/div/section[1]/div/div[9]/div[2]/div[1]/div[2]/div/label').click();
            browser.pause(2000);

            $('/html/body/section[1]/form/div/fieldset/input').click(); //botão próximo passo.
            browser.pause(2000);
        });
    });

    it('Preencher os dados requeridos - Telefone e CPF', () => {
        var pageUrl = browser.getUrl();
        $('//*[@id="home_order_flow_payment_data_lead_person_attributes_phone"]').addValue('11 99999-9999');
        $('//*[@id="home_order_flow_payment_data_insured_person_attributes_cpf"]').addValue('129.659.297-97');
        $('/html/body/div[3]/main/section[1]/form/div[1]/div[2]/div/div[3]/div/button').click();
        browser.pause(1000);
        selectBox.selectByAttribute('name', '')

    });
});
