import React, { useState } from 'react'
import * as styles from './SearchPage.styles';
import BookList from "../BooksList/BookList";
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const { Component, Title, SubTitle, InputLabel, Input, ListWrapper, WishListLink, ArrowIcon, WishLinkText } = styles;

const mapStateToProps = (state) => {
    return { ...state, username: state.username || '' }
}

function SearchPage(props) {
    const [booksList, setBooksList] = useState([])


    function onInputChange(event) {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + event.target.value)
            .then(response => {
                setBooksList(response.data.items[0] ? response.data.items : [])
                console.log(booksList);
            })
            .catch(() => {
                setBooksList([])
                console.log(booksList);

            })
    }
    if (!props.username) {
        return (
            <Redirect to="/" />
        )
    } else {
        return (
            <Component>
                <WishListLink
                    to="/wish-list"
                >
                    <ArrowIcon />
                    <WishLinkText>
                        Go to your Wish List
                </WishLinkText>
                </WishListLink>
                <Title className="div">Hello {props.username}!</Title>
                <SubTitle>Here is your search screen</SubTitle>
                <InputLabel>
                    Please enter here the name of the book you'd like to search for
            </InputLabel>
                <Input
                    onChange={onInputChange}
                />
                <ListWrapper>
                    <BookList arr={booksList} />
                </ListWrapper>
            </Component>

        )
    }

}
export default connect(mapStateToProps, null)(SearchPage);