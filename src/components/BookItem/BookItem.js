import React from 'react'
import * as styles from './BookItem.styles'
import { AiOutlineHeart } from "react-icons/ai";

const { Component, Title, Author, HeartIcon } = styles;

export default function BookItem(props) {
    return (
        <Component>
            <div>
                <Title>{props.title}</Title>
                <Author>{props.author}</Author>
            </div>
            <div>
                <HeartIcon/>
            </div>
        </Component>
    )
}
