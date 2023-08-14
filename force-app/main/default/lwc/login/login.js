import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Login extends NavigationMixin(LightningElement) {
  @track showRequiredMessage = true;

  handleLogin() {
    const emailInput = this.template.querySelector('input[name="email"]');
    const passwordInput = this.template.querySelector('input[name="password"]');

    if (!emailInput.value || !passwordInput.value) {
      this.showRequiredMessage = false;
    } else {
      this.showRequiredMessage = true;
                 // Crie a URL da página de filtro-tela
                 const url = '/eyprojeto/filtro-tela'; // Substitua pela URL correta

                 // Navegue para a nova URL
                 this[NavigationMixin.Navigate]({
                     type: 'standard__webPage',
                     attributes: {
                         url: url
                     }
                 });
    }
  }
}
