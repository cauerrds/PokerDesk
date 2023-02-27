import styled from "styled-components";

      export const Container = styled.div`
        position: relative;
        height: 100vh;
        overflow: hidden;


        .slider-pages {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        transition: transform 0.5s;
        }

        .page{
        min-height: 100%;
        }

        .slider-controls {
        box-sizing: border-box;
        position: absolute;
        ${props =>  props.bottom == 2 ? "bottom: 0;" : "top: 0;" }
        display: flex;
        justify-content: center;
        align-items: center;
        ${props =>  props.bottom == 2 ? "margin-bottom:2.2rem ;" : "margin-top: 2.2rem;" }
        width: 100%;
        }

        .slider-control {
            background: transparent;
            border: none;
            color: #fefefe;
            
        }   

        .active{
            border-bottom: 2px solid #fefefe;
        }
`