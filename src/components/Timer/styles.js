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
        font-size: 3.2rem;
    }
`

export const Clock = styled.div`
    
    font-size: 6.2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 500px){
        
    }
`


export const Blinds = styled.div`  
    font-size: 6em;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .level{
        font-size: 40px;
    }
`