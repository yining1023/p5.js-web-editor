import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Nav(props) {
  return (
    <nav className="nav" role="navigation" title="main-navigation">
      <ul className="nav__items-left" title="project-menu">
        <li className="nav__item">
          <a
            className="nav__new"
            onClick={() => {
              if (props.warnIfUnsavedChanges()) {
                props.newProject();
              }
            }}
          >
            New
          </a>
        </li>
        {(() => { // eslint-disable-line
          if (!props.project.owner || props.project.owner && props.project.owner.id === props.user.id) {
            return (
              <li className="nav__item">
                <a
                  className="nav__save"
                  onClick={() => {
                    if (props.user.authenticated) {
                      props.saveProject();
                    } else {
                      props.openForceAuthentication();
                    }
                  }}
                >
                  Save
                </a>
              </li>
            );
          }
        })()}
        {(() => { // eslint-disable-line
          if (props.project.id) {
            return (
              <li className="nav__item">
                <a className="nav__clone" onClick={props.cloneProject}>
                  Duplicate
                </a>
              </li>
            );
          }
        })()}
        {(() => { // eslint-disable-line
          if (props.project.id) {
            return (
              <li className="nav__item">
                <a className="nav__export" onClick={() => props.exportProjectAsZip(props.project.id)}>
                  Download
                </a>
              </li>
            );
          }
        })()}
        {(() => { // eslint-disable-line
          if (props.project.id) {
            return (
              <li className="nav__item">
                <a onClick={props.showShareModal}>
                  Share
                </a>
              </li>
            );
          }
        })()}
        {(() => { // eslint-disable-line
          if (props.user.authenticated) {
            return (
              <li className="nav__item">
                <p className="nav__open">
                  <Link
                    to="/sketches"
                    onClick={props.stopSketch}
                  >
                    Open
                  </Link>
                </p>
              </li>
            );
          }
        })()}
        <li className="nav__item">
          <p className="nav__open">
            <Link to="/p5/sketches">
              Examples
            </Link>
          </p>
        </li>
        <li className="nav__item">
          <p className="nav__reference">
            <a
              href="https://p5js.org/reference/"
              target="_blank"
            >Reference</a>
          </p>
        </li>
        <li className="nav__item">
          <p className="nav__about">
            <Link to="/about">
              About
            </Link>
          </p>
        </li>
      </ul>
      <ul className="nav__items-right" title="user-menu">
        {(() => {
          if (!props.user.authenticated) {
            return (
              <li className="nav__item">
                <p>
                  <Link to="/login">Log in</Link> <span className="nav__item-spacer">or</span> <Link to="/signup">Sign up</Link>
                </p>
              </li>
            );
          }
          return (
            <li className="nav__item">
              <a>Hello, {props.user.username}!</a>
              <ul className="nav__dropdown">
                <li className="nav__dropdown-heading">
                  <a>Hello, {props.user.username}!</a>
                </li>
                <li>
                  <Link to="/sketches">
                    My sketches
                  </Link>
                </li>
                <li>
                  <Link to="/account">
                    My account
                  </Link>
                </li>
                <li>
                  <a onClick={props.logoutUser} >
                    Log out
                  </a>
                </li>
              </ul>
            </li>
          );
        })()}
      </ul>
      <div className="nav__announce">This is a preview version of the editor, that has not yet been officially released. It is in development, you can report bugs <a href="https://github.com/processing/p5.js-web-editor/issues" target="_blank">here</a>. Please use with caution.</div>
    </nav>
  );
}

Nav.propTypes = {
  newProject: PropTypes.func.isRequired,
  saveProject: PropTypes.func.isRequired,
  exportProjectAsZip: PropTypes.func.isRequired,
  cloneProject: PropTypes.func.isRequired,
  user: PropTypes.shape({
    authenticated: PropTypes.bool.isRequired,
    username: PropTypes.string,
    id: PropTypes.string
  }).isRequired,
  project: PropTypes.shape({
    id: PropTypes.string,
    owner: PropTypes.shape({
      id: PropTypes.string
    })
  }),
  logoutUser: PropTypes.func.isRequired,
  stopSketch: PropTypes.func.isRequired,
  showShareModal: PropTypes.func.isRequired,
  openForceAuthentication: PropTypes.func.isRequired
};

export default Nav;
