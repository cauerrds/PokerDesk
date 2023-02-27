import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    .onCountdown{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .title{      
        width: 100%;
        text-align: center;
    }
`

export const Clock = styled.div`
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 500px){
        
    }

    .fit{
        height: 20vh;
        width: 100%;
    }

`


export const Blinds = styled.div`  
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .fitContainer{
        width: 80%;
        text-align: center;
    }

    .round{
        width: 60%;
    }

    svg{
        height: 40px;
        font-size: 20px;
        color: red;
        :hover{
            cursor: pointer;
            font-size: 40px;
        }
    }



`

