import styled from 'styled-components';
import { Link} from 'react-router-dom'


export const Component = styled.div`
    background: linear-gradient(to bottom, rgb(59, 7, 156), rgb(55, 10, 139),  rgb(66, 8, 104));
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: white;
`;

export const Title = styled.div`
    font-weight: bold;
    margin-top: 50px;
    font-size: 100px;
`;

export const SubTitle = styled.div`
    font-size: 40px;     
    font-weight: bold;
`;
export const InputLabel = styled.div`
    font-size: 30px;   
    margin-top: 100px;
`;
export const Input = styled.input.attrs(attrs => ({
    placeholder: 'username',

    }))`
    margin-top: 15px;
    height: 25px;
    width: 300px;
    border-radius: 10px;
    padding: 10px;
    font-size: 20px;
    border: none;
    outline: none;
`;

export const Button = styled(Link)`
    margin-top: 15px;
    height: 25px;
    width: 150px;
    border-radius: 10px;
    padding: 10px 10px;
    font-size: 15px;
    background-color: ${props => props.active ? 'blue' : 'green' };
    color: white;
    border: none;
    outline: none;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

`;