import React from 'react'
import * as styles from './WishList.styles'
import { Redirect } from 'react-router-dom'
import BookList from '../BooksList/BookList';
import { connect } from 'react-redux'
import { removeBook } from './../../redux/actions/RemoveBook.action'


const { Component, Title, SubTitle, SearchPageLink, ArrowIcon, SearchPageText } = styles;

const mapDispatchToProps = (dispatch, ownProps) => ({
    removeBook: (item) => dispatch(removeBook(item))

})

const mapStateToProps = (state) => {
    return { ...state, wishList: state.wishList || [] }
}


export default connect(mapStateToProps, mapDispatchToProps)(

    function WishList(props) {
        if (!props.username) {
            return (
                <Redirect to="/" />
            )
        } else {
            return (
                <Component>
                    <SearchPageLink
                        to="/search-page"
                    >
                        <ArrowIcon />
                        <SearchPageText>
                            Go to Search Page
                </SearchPageText>
                    </SearchPageLink>
                    <Title>Wish List</Title>
                    <SubTitle>
                        {props.username},  Here you will find all the books you have added to your personal list;)
            </SubTitle>
                    <BookList arr={props.wishList} isWishList/>
                </Component>
            )
        }
    }
)