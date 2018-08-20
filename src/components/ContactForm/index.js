import React from 'react';
import { Field, reduxForm } from 'redux-form';

import submit from './submit';
import './styles.scss';

const renderField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input type={type} {...input} placeholder={placeholder} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

let ContactForm = props => {
  // eslint-disable-line
  const { error, handleSubmit, submitting } = props;
  return (
    <div className="login-page">
      <div className="form">
        <h3>Sign in</h3>
        <form className="login-form" onSubmit={handleSubmit(submit)}>
          <Field
            name="username"
            type="text"
            component={renderField}
            placeholder="username"
            label="Username"
          />

          <Field
            name="password"
            type="password"
            component={renderField}
            placeholder="password"
            label="Password"
          />
          {error && <strong>{error}</strong>}

          {/* <div>
                        <a href="">Forgot password</a>
                    </div> */}

          <div>
            <button type="submit" disabled={submitting}>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ContactForm = reduxForm({
  form: 'contactForm'
  // enableReinitialize: true
})(ContactForm);

// ContactForm = connect(
//     state => state,
//     { load: data => loadData(data) }
//     // dispatch => {
//     //     return {
//     //         load: data => dispatch(loadData(data))
//     //     };
//     // }
// )(ContactForm);

export default ContactForm;
