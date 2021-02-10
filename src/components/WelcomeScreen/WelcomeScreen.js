import React, { useState, useEffect } from 'react';
import * as styles from './WelcomeScreen.styles';


const { Component, Title, SubTitle, InputLabel, Input, Button } = styles;


function WelcomeScreen() {
    const [name, setName] = useState('');
   
    function onClick(event) {
        if (!name) event.preventDefault()
    }
    function onInputChange(event) {
        setName(event.target.value)
    }
    return (
        <Component>
            <Title >Welcome</Title>
            <SubTitle>To the Books Search App by Avraham Weinstein</SubTitle>
            <InputLabel>Please enter here your username</InputLabel>
            <Input
                value={name}
                onChange={onInputChange}
            />
            <Button
                to={{pathname: "/search-page", state: {name:name}}}
                onClick={onClick}
            >
                Find your book!
            </Button>
        </Component>
    )
};



WelcomeScreen.propTypes = {};

WelcomeScreen.defaultProps = {};

export default WelcomeScreen;
