import React from 'react';

function About(props) {
    return(
        <aside>
            <img src={props.blogImage} alt ="blog logo"/>
            <p>{props.aboutText}</p>
        </aside>
    );
}

export default About;