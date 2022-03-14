import styled from 'styled-components';

export const BtnDefaultIcons = styled.button`

display: flex;
align-items: center;
padding: 15px;
width: 100%;
border-radius: 5px;
border: 0px;
outline: none;
font-size: 14px;
font-weight: bold;
margin-bottom: 15px;
transition: 0.4s;

&:hover{
    background-color: #ccc;
}

.center{
    width: 100%;
    text-align: center;
}
`;

export const BtnDefault = styled(BtnDefaultIcons)`
background-color: #7d2ae8;
color: #fff;
display: inline;

&:hover{
    background-color: #4e129c;
}

`;
