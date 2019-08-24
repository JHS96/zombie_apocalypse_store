import React from 'react';

// Display details abou tthe company under a header. Details passed via props.
function About(props) {
    return (
        <div className='About'>
            <h1>About Us</h1>
            <p>{props.aboutUs}</p>
        </div>
    );
}

export default About;