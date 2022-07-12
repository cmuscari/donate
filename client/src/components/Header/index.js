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
            <div className="header-container">
                <Link to="/">
                    <h1 className="header-text">GIVE BACK</h1>
                </Link>
            </div>
            <div className="header-subtitle">
                <h2 className="subtitle-text">Sharing the charitable organizations that YOU care about</h2>
            </div>
            <nav className="nav-container">
                {Auth.loggedIn() ? (
                    <>
                        <a  className="nav-links" href="/" onClick={logout}>
                            LOG OUT
                        </a>
                    </>
                ) : (
                    <>
                        <Link className="nav-links" to="/login">LOG IN</Link>
                        <Link className="nav-links" to="/signup">SIGN UP</Link>
                    </>
                )}
            </nav>
        </header>
    )
}

export default Header;






// function Header() {
//     return (
//         <header className="d-flex flex-column justify-content-center align-items-center header-container">
//             <h2 className="d-flex flex-column mt-3 mb-0 align-items-center justify-content-center">
//                 <a href="/" className="header-title">CORTNIE MUSCARI</a>
//             </h2>
//             <h3 className="header-subtitle">WEB DEVELOPER</h3>
//         </header>
//     );
// }
