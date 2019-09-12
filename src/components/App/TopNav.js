import React from 'react';
import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';

import logo from '../../assets/logo.svg';

export default class TopNav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top jr-top-nav">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link to="/" className="navbar-brand">
              <img src={logo} style={{ height: 40 }} alt="logo" />
            </Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/students">Students</Link>
              </li>
              <li>
                <Link to="/lecturers">Lecturers</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/signin">Sign in</Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

// function UserDropdown(props) {
//   return (
//     <li className="dropdown">
//       <a
//         href="#"
//         className="dropdown-toggle"
//         data-toggle="dropdown"
//         role="button"
//         aria-expanded="false">
//         Admin <span className="caret" />{' '}
//       </a>
//       <ul className="dropdown-menu">
//         <li>
//           <a
//             href="#"
//             onClick={e => {
//               e.preventDefault();
//               auth.logout().then(() => props.history.replace('/signin'));
//             }}>
//             Log out
//           </a>
//         </li>
//         <li>
//           <a href="#">Setting</a>
//         </li>
//       </ul>
//     </li>
//   );
// }

// const DropDown = withRouter(UserDropdown);
