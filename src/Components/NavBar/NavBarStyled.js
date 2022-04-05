import styled from "styled-components"

export const Row = styled.div`
    width:100%;
    background-image:linear-gradient(to right , #FF0076, red);
    padding:10px 0px;
`;
export const RowWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`
export const Div = styled.div`
    display:flex;
    width:50%;
    align-items:center;
    justify-content:space-between;

    @media only screen and (max-width:420px){
     
    justify-content:flex-end;
        
      }

    
`