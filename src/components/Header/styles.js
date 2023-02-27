import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    top: 0;
    left: 0;
    height: 50px;
    font-size: 26px;
    margin-bottom: 10px;

    h1{
        font-size: 30px;
        .FirstChat{
        font-size: 30px;        
        }
        span{
            font-size: 18px;
            color: red;
        }
    }

    @media (min-width: 768px){
    }
`

export const SliderControls = styled.div`
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
`

export const Content = styled.div`
    margin: auto;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1190px;
    align-items: center;
    text-align: center; 

`