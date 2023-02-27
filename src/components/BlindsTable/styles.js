import styled from "styled-components";

export const Container = styled.div`   
    width: 100%;
    flex-grow: 1;
`

export const Content = styled.div`
    box-sizing: border-box;
    height: 100%;
    max-width: 100%;
    max-width: 900px;
    margin: auto;
`

export const TableContainer = styled.div`
    max-width: 100vw;
    margin-top: 10px;
    box-sizing: border-box;
    h1{
        text-align: center;
        font-size: 18px;
    }

    thead, tbody { display: block; }

    thead > tr {
        display: flex;
        width: 100%;
        justify-content: space-between;
        text-align: left;

        
    }

    tbody {
        box-sizing: border-box;
        height: 200px;       /* Just for the demo          */
        overflow-y: auto;    /* Trigger vertical scroll    */
        overflow-x: hidden;  /* Hide the horizontal scroll */

       ::-webkit-scrollbar{
        width: 3px;
        margin-right: -3px;
       }

   

       ::-webkit-scrollbar-thumb{
        background: #F45E44;
       }

        @media (min-height: 400px){
            height: 270px;  
        }

        @media (min-height: 500px){
            height: 370px;  
        }

        @media (min-height: 600px){
            height: 470px;  
        }

        @media (min-height: 700px){
            height: 570px;  
        }

        @media (min-height: 800px){
            height: 670px;  
        }

        @media (min-height: 900px){
            height: 770px;  
        }

        @media (min-height: 1000px){
            height: 970px;  
        }

        @media (min-height: 1100px){
            height: 1070px;  
        }

        @media (min-height: 1200px){
            height: 1170px;  
        }

        @media (min-height: 1300px){
            height: 1270px;  
        }

        @media (min-height: 1400px){
            height: 1370px;  
        }
    }

    
`

export const Table = styled.table`

    border-radius: 8px;
    margin: auto;
    margin-top: 15px;
    box-sizing: border-box;
    max-width: 100vw;

    font-size: 0.8rem;

    .levelRow{
        .closedIcon{
            :hover{
                cursor: pointer;
            }
            svg{
                color: #fefefe;
            }
        }
        select, option{
            color: #fefefe;
        }
        input, select{
            color: #fefefe;
            ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
            }
            -moz-appearance: textfield;
            :focus::placeholder {
            color: transparent;
            }

            background-color: #3698EC;
            ::placeholder{
            color: #fefefe;
        }
        }

    }
    .breakRow{   
        input, select{
            color: #fefefe;
            ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
            }
            -moz-appearance: textfield;
            :focus::placeholder {
            color: transparent;
            }
            color: #fefefe;
            background-color: #F45E44;
            ::placeholder{
                color: #fefefe;
            }
        }
        .closedIcon{
            :hover{
                cursor: pointer;
            }
            height: 17px;
            svg{                             
                color: #fefefe;
            }
        }
    }
    .countdownRow{
        input, select{
            color: #fefefe;
            -moz-appearance: textfield;
            ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
            }
            :focus::placeholder {
            color: transparent;
            }

            box-sizing: border-box;
            margin-bottom: 4px;
            color: #070707;
            background-color: #E5E4E4;
            ::placeholder{
            color: #070707;

        }
        }
    }

    
   
    input, select{
        width: 100%;
        box-sizing: border-box;
        outline: none;
        border: none;
    }


`

