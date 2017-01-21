import React, { PropTypes } from 'react';
import { domOnlyProps } from '../../../utils/reduxFormUtils';

function LoginForm(props) {
  const { fields: { email, password }, handleSubmit, submitting, pristine } = props;
  return (
    <form className="form" onSubmit={handleSubmit(props.validateAndLoginUser.bind(this, props.previousPath))}>
      <p className="form__field">
        <label htmlFor="username" className="form__label">Username</label>
        <input
          className="form__input"
          aria-label="username"
          type="text"
          id="username"
          value={props.user.username}
        />
      </p>
      <p className="form__field">
        <label htmlFor="email" className="form__label">Email</label>
        <input
          className="form__input"
          aria-label="email"
          type="text"
          id="email"
          value={props.user.email}
        />
        {email.touched && email.error && <span className="form-error">{email.error}</span>}
      </p>
      <p className="form__field">
        <label htmlFor="password" className="form__label">Password</label>
        <input
          className="form__input"
          aria-label="password"
          type="password"
          id="password"
          {...domOnlyProps(password)}
        />
        {password.touched && password.error && <span className="form-error">{password.error}</span>}
      </p>
      <input type="submit" disabled={submitting || pristine} value="Save" aria-label="Save" />
    </form>
  );
}

LoginForm.propTypes = {
  fields: PropTypes.shape({
    email: PropTypes.object.isRequired,
    password: PropTypes.object.isRequired
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  validateAndLoginUser: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
  pristine: PropTypes.bool,
  previousPath: PropTypes.string.isRequired,
  user: PropTypes.shape({
    authenticated: PropTypes.bool.isRequired,
    id: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string
  }).isRequired
};

export default LoginForm;
