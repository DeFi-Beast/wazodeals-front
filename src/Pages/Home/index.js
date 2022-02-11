import LayoutDefault from "../../Components/Layouts/LayoutDefault"
import Banner from "../../Components/Sections/Banner"
import Featured from "../../Components/Sections/Featured"
import TopDeal from "../../Components/Sections/TopDeal"
import BaseURL from "../../Components/Helper"
import Partners from "../../Components/Sections/Partners"
import Deals from "../../Components/Sections/Deals"
// import { useDispatch, useSelector } from 'react-redux'


const Home = ()  => {

    

    console.log(BaseURL)
    return (
    <LayoutDefault>
        <Banner></Banner>
        <div className="bgStyled">
        <TopDeal></TopDeal>
        <Partners></Partners>
        {/* <Featured></Featured> */}
        <Deals></Deals>
        </div>
        
    </LayoutDefault>
    )}


export default Home
