import styled from 'styled-components';
import { AiOutlineHeart } from "react-icons/ai";



export const Component = styled.div`
    background-color: #bbc3c9;
    border-radius: 5px;
    border: solid 1px rgb(142, 163, 189);
    width:70%;
    text-align: start;
    padding: 15px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    margin-top:15px;
    &:hover{
        background-color: #dae3ea
    }
`;

export const Title = styled.div`
    font-size: 25px;
    font-weight: bold;
`;


export const Author = styled.div`
    font-size: 15px;
    
`;

export const HeartIcon = styled(AiOutlineHeart)`
    font-size: 30px;
    cursor: pointer;
`;

