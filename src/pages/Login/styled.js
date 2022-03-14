import styled from 'styled-components';

export const AreaLogin = styled.div`
background-color: white;
padding: 30px;
max-width: 300px;
margin: auto;
margin-top: 20px;
text-align: center;
border-radius: 5px;
box-shadow: 0px 0px 10px #ccc;

h1{
    font-size: 22px;
    font-family: sans-serif;
}
.form--imput{
    text-align: left;

    label{
        display: block;
    }

    input{
        margin-bottom: 20px;
        padding: 10px;
        font-size: 16px;
        outline: none;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 280px;
        transition:0.3s;

        &:hover{
            border: 1px solid #7d2ae8;
        }
    }
}

.footerLogin{
   font-size: 16px;
   font-family: sans-serif;

   a{
       text-decoration: none;
       transition: 0.5s;
       margin-left: 5px;
       cursor: pointer;
       color: blue;
       font-weight: bold;

   &:hover{
       color: #7d2ae8;
    
    }
  }
}

`;

