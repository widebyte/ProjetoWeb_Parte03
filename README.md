# ProjetoWeb_Parte03

## Resumo 
Neste projeto teste foram utilizadas ferramentas de automação de processos para a verificação das seguintes atividades requisitadas:
* Criar uma conta e realizar o login com sucesso;
* Acessar a página institucional de cada produto;
* Validar se cada página institucional acessada corresponde ao produto selecionado;
* Realizar a cotação de um seguro.

### Pendências
Neste projeto foi requisitado o Page Objects. Contudo, consegui montar neste projeto, onde consta na pasta **classes**, entretanto, tive alguns erros com as requisições das páginas. Sendo assim, deixei este códigos para que a equipe possa avaliar e indicar melhorias. Se preferirem e solicitarem, posso reenviar este mesmo projeto com o Page Object, pois estou reestruturando e estudando uma melhor entrega para a equipe se for solicitada novamente.

### Ferramentas utlizadas

#### MochaJS
O **Mocha** é uma estrutura de teste JavaScript rica em recursos, executada no Node.js e no navegador onde torna os testes de forma simples e assíncrona. Os testes **Mocha** são executados em série, permitindo relatórios flexíveis e precisos, enquanto mapeiam exceções não capturadas para os casos de teste corretos. 

#### WebDriverIO
O WebdriverIO é uma estrutura de automação de teste que permite executar testes com base no protocolo Webdriver e na tecnologia de automação Appium. Ele fornece suporte para sua estrutura de teste BDD / TDD favorita e executará seus testes localmente ou na nuvem usando Sauce Labs, BrowserStack ou TestingBot.

### Dando o primeiro passo
Você precisará do Node.js instalado (pelo menos v8.11.2 ou superior). Se você não possui o Node instalado, é recomendado a instalação do NVM para ajudar no gerenciamento de várias versões ativas do Node.js.

### Configurando o projeto
Antes de instalar dependências, você precisará inicializar um novo projeto do NPM. Isso permitirá que você use a CLI para instalar dependências no seu projeto.

Para fazer isso, abra o terminal de sua máquina e execute o seguinte comando abaixo:
````shell
mkdir webdriverio-test && cd webdriverio-test
npm init -y
````
### Instale a WebdriverIO CLI
Se você deseja usar o WebdriverIO em seu projeto para teste de integração, é recomendado o uso do executor de teste. Ele vem com muitos recursos úteis que facilitam a sua vida na hora da codificação.

Desde o WebdriverIO versão 5, o testrunner está no @wdio/clipacote NPM.

Agora, instale a CLI abaixo:
````shell
npm i --save-dev @wdio/cli
````
### Gerar arquivo de configuração
Em seguida, você gerará um arquivo de configuração para armazenar suas configurações do WebdriverIO.

Para fazer isso, basta executar o utilitário de configuração abaixo:
````shell
./node_modules/.bin/wdio config -y
````
É isso aí! O configurador instalará todos os pacotes necessários para você e criará um arquivo de configuração chamado **wdio.conf.js.**

Como foi utilizado o Geckodriver, será preciso substituir o padrão path(que usa o padrão do Selenium /wd/hub). Então, ajudará a equipe a ficar pronta para criar seu primeiro arquivo de especificação como por exemplo "arquivo de teste".

### Criar arquivos de especificação
Neste momento é a hora criar seu arquivo de teste. Você vai armazenar todos os seus arquivos de teste em uma nova pasta.

Crie a pasta de teste assim:
````shell
mkdir -p ./test/specs
````
** Crie um novo arquivo nessa pasta (ela foi chamada de login_cadastro.js):**
````shell
touch ./test/specs/login_cadastro.js
````
Abra esse arquivo e veja o seguinte código (O código foi colocado abaixo só para ter uma ideia de como foi montado):
````shell
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
            $('//*[@id="user_name"]').addValue('Fulano da Silva');
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

````
### Inicie o Testrunner do WebDriverIO
Agora, é hora de executar seus testes!

Para fazer isso, basta executar o seguinte comando abaixo:
````shell
./node_modules/.bin/wdio wdio.conf.js
````
**OBS**
Se quiser rodar um caso de teste em específico e só digitar o seguinte comando abaixo:
````shell
./node_modules/.bin/wdio wdio.conf.js --spec "nome_do_teste".js
````



