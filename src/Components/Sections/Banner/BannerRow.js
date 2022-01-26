import styled from "styled-components";

export const Row = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:20px;
    flex-direction:column-reverse;


    @media only screen and (min-width:420px){
        flex-direction:row;
    }
    
`
export const Div = styled.div`
    width:100%;
    @media only screen and (min-width:420px){
        width:45%;
    }

`
