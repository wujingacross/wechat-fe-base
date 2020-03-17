import { observable, action } from 'mobx';

class LoginStore {
  @observable isLogin;

  constructor() {
    this.isLogin = false;
  }

  @action loginFun = () => {
    this.isLogin = true;
  };
}

const loginStore = new LoginStore();

export default loginStore;
export { LoginStore };
