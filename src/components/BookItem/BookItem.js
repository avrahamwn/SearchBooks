import React, { useState } from 'react'
import * as styles from './BookItem.styles'
import CheckedIcon from './../CheckedIcon/CheckedIcon'
import { addBook } from './../../redux/actions/add-book.action'
import { removeBook } from './../../redux/actions/RemoveBook.action'

import { connect } from 'react-redux'


const { Component, Title, Author, HeartIcon } = styles;

const mapDispatchToProps = (dispatch, ownProps) => ({
    addBook: (item) => dispatch(addBook(item)),
    removeBook: (item) => dispatch(removeBook(item))

})

const mapStateToProps = (state) => {
    return { ...state, wishList: state.wishList || [] }
}


export default connect(mapStateToProps, mapDispatchToProps)(

    function BookItem(props) {
        const [checked, setChecked] = useState(props.wishList.find(book => book.id === props.id))

        function onIconClicked() {
            setChecked(!checked)
            let book = { id: props.id, volumeInfo: { title: props.title, author: props.author } }
            !checked ? props.addBook(book) : props.removeBook(book)
        }

        return (
            <Component>
                <div>
                    <Title>{props.title}</Title>
                    <Author>{props.author}</Author>
                </div>
                <div onClick={onIconClicked}>
                    <CheckedIcon checked={checked} isWishList={props.isWishList} />
                </div>
            </Component>
        )
    }
)
