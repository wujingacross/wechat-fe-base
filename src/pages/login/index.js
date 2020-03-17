import React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';

@inject('loginStore')
@observer
class Login extends React.PureComponent {
  render() {
    const { isLogin } = this.props.loginStore || {};
    return (
      <div>
        Login page
        <div>
          <Link to="/mine">MineHome</Link>
        </div>
        {isLogin ? null : <div onClick={this.loginFun}>log in</div>}
      </div>
    );
  }

  loginFun = e => {
    this.props.loginStore.loginFun();
    e.preventDefault();
  };
}

export default Login;
