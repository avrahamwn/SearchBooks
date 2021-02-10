import styled from 'styled-components';
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
    font-weight:bold;
`;

export const SubTitle = styled.div`
    font-size:25px;
`;
export const SearchPageLink = styled(Link)`
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

export const SearchPageText = styled.div`
    width:55px;
    text-align: start;
    
`;
