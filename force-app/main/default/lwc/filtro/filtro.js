import { LightningElement } from 'lwc';

import EYassetsp from '@salesforce/resourceUrl/EYassetsp';

export default class Filtro extends LightningElement {
    candidato1 = `${EYassetsp}/EYassets/matheusLogo.png`;
    candidato2 = `${EYassetsp}/EYassets/Cahue.jpg`;
    candidato3 = `${EYassetsp}/EYassets/Gabriel.jpg`;
    candidato4 = `${EYassetsp}/EYassets/Gustavo.jpg`;
    candidato5 = `${EYassetsp}/EYassets/Vinicius.jpg`;
    candidato6 = `${EYassetsp}/EYassets/Sofia.jpg`;
    candidato7 = `${EYassetsp}/EYassets/Ricardo.jpg`;
    candidato8 = `${EYassetsp}/EYassets/Laura.jpg`;
    
    searchText = '';

    handleSearchKeyUp(event) {
        this.searchText = event.target.value.toLowerCase();
    }

    handleSearchEnter(event) {
        if (event.key === 'Enter') {
            this.sendQuestion();
        }
    }

    sendQuestion() {
        console.log('teste');
    }
}
