import styled from "styled-components";

export const BrandCoupon = styled.div`
    display:flex;
    margin:0 auto;

    margin-bottom:30px;
    cursor:pointer;
    box-shadow: 3px 3px 6px #00000029;

    
    @media only screen and (min-width:900px) {
        width:45%;
        margin: 0 0 30px 0px;

    }
    @media only screen and (min-width:1300px) {
        width:31%;
    }
    
    
`
export const Div = styled.div`
display:flex;
flex-direction:column;
padding:10px 0px 10px 10px;
justify-content:space-between;
background: #f5b3ea;
border-radius:0px 5px 5px 0px;
flex-grow:1;
@media only screen and (min-width:420px) {
padding:20px 0px 20px 20px;
    
}

`
export const Span = styled.span`
    padding-left:15px;
`
