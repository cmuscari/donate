import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
      };

    return (
        <header>
            <div>
                <Link to="/">
                    <h1 className="nav-head">GIVE BACK</h1>
                </Link>

                <nav>
                {Auth.loggedIn() ? (
                <>
                     <a href="/" onClick={logout}>
                     Logout
                 </a>
                </>
              ) : (
                 <>
                    <Link to="/login">Sign In</Link>
                    <Link to="/signup">Sign Up</Link>
                    </>
                )}
                </nav>
            </div>
        </header>
    )
}

export default Header;