import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import Everymindassets from '@salesforce/resourceUrl/Everymindassets';

export default class Cadastro extends NavigationMixin(LightningElement)  {

  everymindlogo = `${Everymindassets}/EYassets/everymind.png`;
  modelo = `${Everymindassets}/EYassets/modelo.png`;

  @track showRequiredMessage = false;
  @track showSuccessMessage = false;
  @track showFullNameRequiredMessage = false;
  @track showEmailRequiredMessage = false;
  @track showBirthdateRequiredMessage = false;
  @track showDddRequiredMessage = false;
  @track showCellphoneRequiredMessage = false;
  @track showRaceRequiredMessage = false;
  @track showLgbtqRequiredMessage = false;
  @track showDisabilityRequiredMessage = false;
  @track showFamilyIncomeRequiredMessage = false;

  handleCadastro() {
    const fullNameInput = this.template.querySelector('input[name="full-name"]');
    const emailInput = this.template.querySelector('input[name="email"]');
    const birthdateInput = this.template.querySelector('input[name="birthdate"]');
    const dddInput = this.template.querySelector('input[name="ddd"]');
    const cellphoneInput = this.template.querySelector('input[name="cellphone"]');
    const raceInput = this.template.querySelector('select[name="race"]');
    const lgbtqInput = this.template.querySelector('select[name="lgbtq"]');
    const disabilityInput = this.template.querySelector('select[name="disability"]');
    const familyIncomeInput = this.template.querySelector('select[name="family-income"]');

    this.showFullNameRequiredMessage = false;
    this.showEmailRequiredMessage = false;
    this.showBirthdateRequiredMessage = false;
    this.showDddRequiredMessage = false;
    this.showCellphoneRequiredMessage = false;
    this.showRaceRequiredMessage = false;
    this.showLgbtqRequiredMessage = false;
    this.showDisabilityRequiredMessage = false;
    this.showFamilyIncomeRequiredMessage = false;
    this.showRequiredMessage = false;

    if (!fullNameInput.value) {
      this.showFullNameRequiredMessage = true;
      this.showRequiredMessage = true;
    }

    if (!emailInput.value) {
      this.showEmailRequiredMessage = true;
      this.showRequiredMessage = true;
    }

    if (!birthdateInput.value) {
      this.showBirthdateRequiredMessage = true;
      this.showRequiredMessage = true;
    }

    if (!dddInput.value) {
      this.showDddRequiredMessage = true;
      this.showRequiredMessage = true;
    }

    if (!cellphoneInput.value) {
      this.showCellphoneRequiredMessage = true;
      this.showRequiredMessage = true;
    }

    if (!raceInput.value) {
      this.showRaceRequiredMessage = true;
      this.showRequiredMessage = true;
    }

    if (!lgbtqInput.value) {
      this.showLgbtqRequiredMessage = true;
      this.showRequiredMessage = true;
    }

    if (!disabilityInput.value) {
      this.showDisabilityRequiredMessage = true;
      this.showRequiredMessage = true;
    }

    if (!familyIncomeInput.value) {
      this.showFamilyIncomeRequiredMessage = true;
      this.showRequiredMessage = true;
    }


    if (!this.showRequiredMessage) {
      // Mostra a mensagem de sucesso
      this.showSuccessMessage = true;

       // Define um timeout para ocultar a mensagem após 5 segundos
       setTimeout(() => {
        this.showSuccessMessage = false;
      
      const url = '/eyprojeto/ey-login'; // Substitua pela URL correta

      // Navegue para a nova URL
      this[NavigationMixin.Navigate]({
          type: 'standard__webPage',
          attributes: {
              url: url
          }
      });
  }, 4000);
}
}
}
