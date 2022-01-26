import LayoutDefault from "../../Components/Layouts/LayoutDefault"
import Banner from "../../Components/Sections/Banner"
import Featured from "../../Components/Sections/Featured"
import TopDeal from "../../Components/Sections/TopDeal"
import BaseURL from "../../Components/Helper"


const Home = ()  => {

    console.log(BaseURL)
    return (
    <LayoutDefault>
        <Banner></Banner>
        <div className="bgStyled">
        <TopDeal></TopDeal>
        <Featured></Featured>
        </div>
        
    </LayoutDefault>
    )}


export default Home
