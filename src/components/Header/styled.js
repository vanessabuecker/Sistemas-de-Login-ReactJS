import styled from 'styled-components';

export const AreaHeader = styled.div`
height: 50px;
background-image: linear-gradient(to right, #ffefea, #ff598b);
color: #fff;

.container-small{
    background-color: #cb9ca1;
    padding: 2px 8px;
}

.container{
    padding: 1px 15px;
    display: flex;
    align-items: center;
}

    .logo{
        flex: 1;
        img{
            width: 40px;
        }
    }

    nav{
        ul{
            display: flex;
        }

        li{
            list-style: none;
            margin-left: 20px;
            font-size: 20px;
            color: #6f5153;

            a{
                text-decoration: none;
                color: #1a1a1a;

                &:hover{
                    color: #6f5153;
                }
            }
        }
    }
`;