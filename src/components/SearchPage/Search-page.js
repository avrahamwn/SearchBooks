import React, { useState } from 'react'
import * as styles from './SearchPage.styles';
import BookList from "../BooksList/BookList";
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Pagination from '@material-ui/lab/Pagination';

const { Component, Title, SubTitle, InputLabel, Input, ListWrapper, WishListLink, ArrowIcon, WishLinkText } = styles;

const mapStateToProps = (state) => {
    return { ...state, username: state.username || '' }
}

function SearchPage(props) {
    const [booksList, setBooksList] = useState([])
    const [numOfPages, setNumOfPages] = useState(0);
    const [keyWord, setKeyWord] = useState('')

    function getBooks(startIndex = 0) {
        if(!keyWord){ 
            setBooksList([])
            setNumOfPages(0)
            return;
        }
        axios.get('https://www.googleapis.com/books/v1/volumes?maxResults=15&q=' + keyWord + '&startIndex=' + startIndex)
            .then(response => {
                setBooksList(response.data.items[0] ? response.data.items : [])
                setNumOfPages(Math.round(response.data.totalItems / 15))
                console.log(booksList);
            })
            .catch(() => {
                setBooksList([])                
            })
    }

    function onInputChange(event) {
        setKeyWord(event.target.value)
        console.log(event);
        console.log(keyWord);
        getBooks();
    }

    function handlePagination(event, value) {        
        getBooks(value * 15);
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
                <InputLabel active={true}>
                  Please enter here the name of the book you'd like to search for
            </InputLabel>
                <Input
                    onChange={onInputChange}
                />
                <Pagination count={numOfPages} variant="outlined" color="primary" onChange={handlePagination} />
                <ListWrapper>
                    <BookList arr={booksList} />
                </ListWrapper>
            </Component>

        )
    }

}


export default connect(mapStateToProps, null)(SearchPage);

//hi naomi