import React, { useState, useEffect } from 'react';
import * as styles from './WelcomeScreen.styles';
import { changeUsername } from './../../redux/actions/ChangeUsername.action'
import { connect } from 'react-redux'



const { Component, Title, SubTitle, InputLabel, Input, Button } = styles;

const mapDispatchToProps = (dispatch, ownProps) => ({
    changeName : (item) => dispatch(changeUsername(item))
})


function WelcomeScreen(props) {
    const [name, setName] = useState('');   
   
    function onClick(event) {
        if (!name) event.preventDefault()
        props.changeName(name)
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
                to={{pathname: "/search-page", state: {name}}}
                onClick={onClick}
                active={name ? 1 : 0}
            >
                Find your book!
            </Button>
        </Component>
    )
};



WelcomeScreen.propTypes = {};

WelcomeScreen.defaultProps = {};

export default connect(null, mapDispatchToProps)(WelcomeScreen);
