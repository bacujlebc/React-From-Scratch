import { SubmissionError } from 'redux-form';
import { push } from 'react-router-redux';
import { loginStart, loginFailed, loginSuccess } from '../../actions/auth';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function submit(values, dispatch) {
  dispatch(loginStart());
  return sleep(1000).then(() => {
    // simulate server latency
    if (!['vasyl'].includes(values.username)) {
      dispatch(loginFailed());
      throw new SubmissionError({
        username: 'User does not exist',
        _error: 'Login failed!'
      });
    } else if (values.password !== 'Test12345') {
      dispatch(loginFailed());
      throw new SubmissionError({
        password: 'Wrong password',
        _error: 'Login failed!'
      });
    } else {
      dispatch(
        loginSuccess({
          username: values.username,
          password: values.password
        })
      );
      dispatch(push('/'));
    }
  });
}

export default submit;
