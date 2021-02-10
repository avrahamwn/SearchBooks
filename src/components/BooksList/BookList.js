import React from 'react'
import axios from 'axios'
import BookItem from '../BookItem/BookItem'

export default function BookList(props) {
    return (
        props.arr.map(item => (
            <BookItem
                key={item.id}
                title={item.volumeInfo.title || "No Title"}
                author={item.volumeInfo .authors ?  "by " + item.volumeInfo .authors[0] : "Author name unspecified"}
            />
        ))

    )
}
