import styled from "styled-components";

export const Container = styled.div`
    height: 50px;
    text-align: center; 
    font-size: 26px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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