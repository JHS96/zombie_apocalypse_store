import React from 'react';

// Reusable header component. Displays user name when user is logged in, or
// 'Please Log In' when no user is logged in
// Also displays company logo
// Details passed on via props
function Header(props) {
    return (
        <header className='App-header'>
            <div>
                <img src={props.image} className='App-logo' alt='logo'></img>
            </div>
            <div>
                <br></br>
                <h1>{props.isLoggedIn ? `Welcome to the "Zombie Apocalypse" Store, ${props.name}...` : 'Please Log In'}</h1>
            </div>
        </header>
    );
}

export default Header;