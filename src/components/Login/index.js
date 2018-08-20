import React, { Component } from 'react';
import WrappComponent from '../WrappComponent';

import './styles.scss';

// const Login = props => {
//     return <WrappComponent />;
// };

class Login extends Component {
  componentWillMount() {
    this.elem = document.createElement('div');
    this.elem.setAttribute('id', 'backg');
    document.body.appendChild(this.elem);
  }

  componentWillUnmount() {
    document.body.removeChild(this.elem);
  }

  render() {
    return <WrappComponent />;
  }
}

export default Login;
