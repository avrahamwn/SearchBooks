import styled from 'styled-components';
import {DebounceInput} from 'react-debounce-input';
import { Link} from 'react-router-dom'
import { AiOutlineArrowRight } from "react-icons/ai";

export const Component = styled.div`
    background-color:#cfd4d6;
    min-height:100%;
    padding:50px;
    color: #3d87a0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.div`
    font-size:80px;
`;

export const SubTitle = styled.div`
    font-size:40px;
`;

export const InputLabel = styled.div`
    font-size:20px;
    margin-top: 100px;
`;

export const Input = styled(DebounceInput).attrs(attrs => ({
    placeholder:"e.g. Uncle Tom's Cabine",    
    debounceTimeout:300    
}))`
    background-color:#cfd4d6;
    border:none;
    outline:none;
    border-bottom: solid 1px #3d87a0;
    margin-top:20px;
    height:35px;
    width: 400px;
    font-size:20px;
    padding-left: 10px;
    color: #3d87a0;
    &::-webkit-input-placeholder {
    color: #3d87a0;
  }
`;

export const ListWrapper = styled.div`
    margin-top:30px;
    min-width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
`;

export const WishListLink = styled(Link)`
    align-self:flex-start;
    text-decoration: none;
    color: #3d87a0;
    display:flex;
    align-items:center;
   font-size:12px;
   font-weight: bold;

`;

export const ArrowIcon = styled(AiOutlineArrowRight)`
    font-size:50px !important;
    align-self:flex-start;

`;

export const WishLinkText = styled.div`
    width:55px;
    text-align: start;
    
`;