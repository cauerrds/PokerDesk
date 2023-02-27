import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (min-width: 768px){
        flex-direction: row;
    }
`

export const InputContainer = styled.div`
    gap: 1.5rem;
    width: 100%;
    margin: auto;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px){
        flex-direction: row;
        height: 100%;
    }
`

export const InfoContainter = styled.div`
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    h1{
        font-size: 3rem;
    }
    h2{
        font-size: 2rem;
    }
`



export const FileInput = styled.label`
    border: 1px solid #fefefe;
    border-radius: 4px;
    padding: 6px 12px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    svg{
        font-size: 100px;
    };

    input[type="file"] {
    display: none;
    }
`

export const FileOutput = styled.div`
    border: 1px solid #fefefe;
    border-radius: 4px;
    padding: 6px 12px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    svg{
        font-size: 100px;
    };

`