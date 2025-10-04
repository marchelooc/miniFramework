import { expect } from "@playwright/test";

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.logInEnjoyBtn = 'button[id="btnLogin"]';
    this.emailInput = 'input[id="email_address"]'; 
    this.passwordInput = 'input[id="email_password"]';
    this.loginButton = 'button[class="login_btn type_green _emailLoginButton"]';
    this.fulLink = '//a[@data-rank="2"]';
  }

  async gotoLogin() {
    await this.page.goto(process.env.BASE_URL);
    await this.page.click(this.logInEnjoyBtn);
    await this.page.click("a.btn_sns._btnLoginEmail");
  }

  async login(email, password) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    //await this.page.pause();
    await this.page.click(this.loginButton);
    await expect(this.page).toHaveURL(/webtoons\.com\/en/);
  }
    async precionarLink() {
    await this.page.click(this.fulLink);
  }
}
