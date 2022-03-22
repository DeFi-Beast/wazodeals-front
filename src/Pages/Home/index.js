import LayoutDefault from "../../Components/Layouts/LayoutDefault";
import Banner from "../../Components/Sections/Banner";
import Featured from "../../Components/Sections/Featured";
import TopDeal from "../../Components/Sections/TopDeal";
import BaseURL from "../../Components/Helper";
import Partners from "../../Components/Sections/Partners";
import Deals from "../../Components/Sections/Deals";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllDiscounts, getAllMerchants, updateAllDiscounts } from "../../actions";
import { useSelector } from "react-redux";

const Home = () => {
  
    const dispatch = useDispatch()
    const {discounts} = useSelector(state => state.discounts)
    const state = useSelector(state => state);

    console.log(state)
    console.log (discounts)

   
  useEffect(() => {
      // dispatch(updateAllDiscounts())
  })


  return (
    <LayoutDefault>
      <Banner></Banner>
      <div className="bgStyled">
        <TopDeal></TopDeal>
        <Partners></Partners>
        <Deals discounts={discounts}></Deals>
      </div>
    </LayoutDefault>
  );
};

export default Home;
