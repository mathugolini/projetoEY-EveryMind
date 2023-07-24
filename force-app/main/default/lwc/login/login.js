import { LightningElement, track } from 'lwc';

export default class Login extends LightningElement {
  @track showRequiredMessage = true;

  handleLogin() {
    const emailInput = this.template.querySelector('input[name="email"]');
    const passwordInput = this.template.querySelector('input[name="password"]');

    if (!emailInput.value || !passwordInput.value) {
      this.showRequiredMessage = false;
    } else {
      this.showRequiredMessage = true;
      // Restante da lógica de login
    }
  }
}
