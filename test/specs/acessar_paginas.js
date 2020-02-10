describe('Acessar páginas do Youse', () => {
    it('Acessar Página da Youse - HomePage', () => {
        browser.url('https://youse.com.br');
        const title = browser.getTitle();
      
    });

    it('Acessar Página - Seguro Auto', () => {
        $('/html/body/div[1]/div[1]/div/div[1]/div/div/div[1]/div[1]/a/span').click();
        const title = browser.getTitle();
        const element = $('#Seguro Auto do seu jeito');
        //element.waitForDisplayed(3000)
        browser.pause(1500);
        $('/html/body/div[1]/div[1]/div/div[1]/div/div/div[1]/a/img'); //voltar para a página inicial
        browser.pause(1000);

    });

    it('Acessar Página - Seguro Residencial', () => {
        $('/html/body/div[1]/div[1]/div/div[1]/div/div/div[1]/div[2]/a/span').click();
        const title = browser.getTitle();
        const element = $('#Seguro Residencial pra ficar numa boa');
        //element.waitForDisplayed(3000)
        browser.pause(1500);
        $('/html/body/div[1]/div[1]/div/div[1]/div/div/div[1]/a/img'); //voltar para a página inicial
        browser.pause(1000);
    });

    it('Acessar Página - Seguro Vida', () => {
        $('/html/body/div[1]/div[1]/div/div[1]/div/div/div[1]/div[3]/a/span').click();
        const title = browser.getTitle();
        const element = $('#Seguro Vida pra ousar mais');
        //element.waitForDisplayed(3000)
        browser.pause(1500);
        $('/html/body/div[1]/div[1]/div/div[1]/div/div/div[1]/a/img'); //voltar para a página inicial
        browser.pause(1000);
    });
    
});