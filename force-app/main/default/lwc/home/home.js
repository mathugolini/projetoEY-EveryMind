import { LightningElement, track, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'; // Certifique-se de importar corretamente
import Everymindassets from '@salesforce/resourceUrl/Everymindassets';
import Everymindassets2 from '@salesforce/resourceUrl/Everymindassets2';

export default class Home extends NavigationMixin(LightningElement) {

    telefone = `${Everymindassets2}/EYassets/telefone.png`;
    seta = `${Everymindassets2}/EYassets/seta.png`;
    info = `${Everymindassets2}/EYassets/info.png`;
    conquista = `${Everymindassets2}/EYassets/conquista.png`;
    caixa = `${Everymindassets2}/EYassets/caixa.png`;
    everymindlogo = `${Everymindassets}/EYassets/everymind.png`;

    @track menuItems = [
        { id: 'item1', link: 'https://www.everymind.com.br/?utm_source=ISG&utm_medium=LandingPage%20&utm_id=Institucional%20', icon: `${Everymindassets}/EYassets/everymind.png`, style: '' },
        { id: 'item2', link: 'https://www.everymind.com.br/sobre-nos/', icon: `${Everymindassets2}/EYassets/info.png`, style: '' },
        { id: 'item3', link: 'https://www.everymind.com.br/produtos-e-servicos/', icon: `${Everymindassets2}/EYassets/caixa.png`, style: '' },
        { id: 'item4', link: 'https://mcjb15vjp4x3shyj9vwqlqvwnky1.pub.sfmc-content.com/txhmgfghyhc?utm_source=ISG&utm_medium=LandingPage&utm_id=Institucional', icon: `${Everymindassets2}/EYassets/conquista.png`, style: '' },
        { id: 'item5', link: 'https://www.everymind.com.br/contato/', icon: `${Everymindassets2}/EYassets/telefone.png`, style: '' },
        { id: 'item6', link: 'https://hugolini-portifolio-dev-ed.develop.my.site.com/eyprojeto/', icon: `${Everymindassets2}/EYassets/seta.png`, style: '' },
    ];

    isExpanded = false;

    handleCheckboxChange(event) {
        this.isExpanded = event.target.checked;

        this.menuItems = this.menuItems.map((item, index) => {
            if (this.isExpanded) {
                const angle = (Math.PI * 2 * index) / this.menuItems.length;
                const x = Math.cos(angle) * 100; // Radius
                const y = Math.sin(angle) * 100; // Radius
                return {
                    ...item,
                    style: `transform: translate3d(${x}px, ${y}px, 0);`,
                };
            } else {
                return {
                    ...item,
                    style: 'transform: translate3d(0, 0, 0);',
                };
            }
        });
    }

    handleMenuItemClick() {
        
        const clickedItemId = event.target.dataset.itemId;
        if (clickedItemId === 'item1') {
            // Redirecionar para a página desejada na mesma janela
            window.open("https://www.everymind.com.br/?utm_source=ISG&utm_medium=LandingPage%20&utm_id=Institucional%20","_blank");
        } else if (clickedItemId === 'item2') {
            window.open("https://www.everymind.com.br/sobre-nos/","_blank");
        } else if (clickedItemId === 'item3') {
            window.open("https://www.everymind.com.br/produtos-e-servicos/","_blank");
        } else if (clickedItemId === 'item4') {
            window.open("https://mcjb15vjp4x3shyj9vwqlqvwnky1.pub.sfmc-content.com/txhmgfghyhc?utm_source=ISG&utm_medium=LandingPage&utm_id=Institucional","_blank");
        } else if (clickedItemId === 'item5') {
            window.open("https://www.everymind.com.br/contato/")
        } else if (clickedItemId === 'item6') {
            window.open("https://hugolini-portifolio-dev-ed.develop.my.site.com/eyprojeto/")
        }
      
}
}