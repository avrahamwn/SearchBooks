import React from 'react'
import * as styles from './WishList.styles'

const { Component, Title, SubTitle, SearchPageLink, ArrowIcon, SearchPageText } = styles;

export default function WishList(props) {
    return (
        <Component>
            <SearchPageLink
                to={{ pathname: "/search-page", state: { name: props.location.state.name } }}
            >
                <ArrowIcon />
                <SearchPageText>
                    Go to Search Page
                </SearchPageText>
            </SearchPageLink>
            <Title>Wish List</Title>
            <SubTitle>
                {props.location.state.name},  Here you will find all the books you have added to your personal list;)
            </SubTitle>
        </Component>
    )
}
