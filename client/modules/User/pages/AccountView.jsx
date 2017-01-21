import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { validateAndLoginUser } from '../actions';
import MyAccountForm from '../components/MyAccountForm';
// import GithubButton from '../components/GithubButton';
import { browserHistory } from 'react-router';
import InlineSVG from 'react-inlinesvg';
const exitUrl = require('../../../images/exit.svg');
const logoUrl = require('../../../images/p5js-logo.svg');


class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.closeMyAccountPage = this.closeMyAccountPage.bind(this);
    this.gotoHomePage = this.gotoHomePage.bind(this);
  }

  closeMyAccountPage() {
    browserHistory.push(this.props.previousPath);
  }

  gotoHomePage() {
    browserHistory.push('/');
  }

  render() {
    return (
      <div className="form-container">
        <div className="form-container__header">
          <button className="form-container__logo-button" onClick={this.gotoHomePage}>
            <InlineSVG src={logoUrl} alt="p5js Logo" />
          </button>
          <button className="form-container__exit-button" onClick={this.closeMyAccountPage}>
            <InlineSVG src={exitUrl} alt="Close My Account Page" />
          </button>
        </div>
        <div className="form-container__content">
          <h2 className="form-container__title">My Account</h2>
          <MyAccountForm {...this.props} />

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    previousPath: state.ide.previousPath
  };
}

function mapDispatchToProps() {
  return {
    validateAndLoginUser
  };
}

function validate(formProps) {
  const errors = {};
  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }
  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }
  return errors;
}

LoginView.propTypes = {
  previousPath: PropTypes.string.isRequired
};

export default reduxForm({
  form: 'login',
  fields: ['email', 'password'],
  validate
}, mapStateToProps, mapDispatchToProps)(LoginView);
