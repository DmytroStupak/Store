import { makeAutoObservable } from "mobx";
import AuthStore from "../../stores/AuthStore";

class LoginStore {
  authStore = new AuthStore();

  email = "";
  password = "";
  error = "";
  isLoading = false;

  constructor(authStore, isLoading) {
    this.isLoading = isLoading;
    this.authStore = authStore;
    makeAutoObservable(this);
  }

  changeEmail(email) {
    this.email = email;
    if (!!this.error) {
      this.error = "";
    }
  }

  changePassword(password) {
    this.password = password;
    if (!!this.error) {
      this.error = "";
    }
  }

  async login() {
    try {
      this.isLoading = true;
      await this.authStore.login(this.email, this.password);
    } catch (e) {
      if (e instanceof Error) {
        this.error = e.message;
      }
    }
    this.isLoading = false;
  }

  async logout() {
    try {
      this.isLoading = false;
      await this.authStore.logout(this.email, this.password);
    } catch (e) {
      if (e instanceof Error) {
        this.error = e.message;
      }
    }
    this.isLoading = true;
  }
}

export default LoginStore;
