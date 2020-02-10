//import login from './classes/login_spec';
//import page from './classes/page';
//import login from './classes/login_page';
describe('Selenionar Produto Auto', () => {    
    
    it('Preencher login e senha', () => {
        // Login.open();
        browser.url('https://www.youse.com.br/users/email_verifications/new'); //acessar o site da youse.
        //browser.pause(1000); //pause para aguardar o carragamento da página de Login do usuário.
        console.log(browser.getUrlAndTitle());

        $('//*[@id="email"]').addValue('email_cadastrado); //Entrar com o e-mail cadastrado.      
        $('/html/body/div[2]/article/form/div/input').click(); //clicar no botão Próximo Passo.
        browser.pause(1000);        
        $('//*[@id="user_password"]').addValue('senha_cadastrada');
        browser.pause(1000);        
        $('/html/body/div[2]/article/form/div/input').click();
        browser.pause(1000);     
        var pageUrl = browser.getUrl('https://www.youse.com.br/account');
   });    
   
});

describe('Identificando a página da Cotação do Seguro Auto', () => {
    it('identificar página', () => {
        browser.url('https://www.youse.com.br/account');

        $('/html/body/div[4]/div/div/article[2]/a').click(); //clicar no botão Cotar Seguro Auto.
        browser.pause(1500);
        
        const title = browser.getTitle()
        console.log('Com a gente: ' + title)

        browser.pause(1500);
        $('//*[@id="auto_order_flow_lead_person_data_lead_person_attributes_phone"]').addValue('11999999999');
        browser.pause(1000);
        $('/html/body/section/div/form/fieldset[2]/div/input').click(); //clicando no botão continuar;
        browser.pause(2000);
    });    

    it('Agora, fale um pouquinho sobre o seu carro', () => {
        $('/html/body/div[3]/div[1]/form/fieldset[1]/section/span[1]/div/label').click('Sim');
        browser.pause(1000);
        $('//*[@id="auto_order_flow_pricing_requirements_vehicle_attributes_license_plate_or_vin"]').addValue('LOI3313');
        browser.pause(1000);

        browser.pause(500);
        $('//*[@id="auto_order_flow_pricing_requirements_vehicle_attributes_bullet_proof"]').click('não é');
        browser.pause(1000);
    });
    it('Fale um pouco sobre onde você mora', () => {

    });
});



