import React from 'react'
import styled from 'styled-components';
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";




export const HeartIcon = styled(AiOutlineHeart)`
    font-size: 30px;
    cursor: pointer;
`;

export const Vicon = styled(AiOutlineCheck)`
    font-size: 30px;
    cursor: pointer;
`;

export const Xicon = styled(AiFillCloseCircle)`
    font-size: 30px;
    cursor: pointer;
`;




export default function CheckedIcon(props) {

    if (props.checked && !props.isWishList ) {
        return (
            <Vicon />
        )
    } else if (props.isWishList) {
        return (
            <Xicon/>
        )
    } else {
        return (
            <HeartIcon />

        )
    }

}
