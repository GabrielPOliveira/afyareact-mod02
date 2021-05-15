import styled from "styled-components";

export const CardContent = styled.div`

    border-radius: 22px;
    background-color: #e2e2e2;
    padding: 22px;


    & form{
        display: grid;

        & input{
            //border-radius: 12px;
            margin: 2px 0;
            width: 100%;
            height: 18px;

        }

        & button{
            margin: 10px 0;
            background: #F70054;
            border: none;
            height: 30px;
            color: #fff;
            font-weight: bold;
            text-transform: uppercase;
        }

    }


`