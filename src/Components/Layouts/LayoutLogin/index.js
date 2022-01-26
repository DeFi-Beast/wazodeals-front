import { Div } from "./LayoutStyled";
import background from "../../../Assets/women.png"

const LayoutLogin = (props) => {

    const myStyle={
        backgroundImage: `linear-gradient(to right, rgba(176, 0, 185, 0.6) -26.48%, rgba(0,0,0,0.6) 73.52%),url(${background})`,
        height:'100vh',

        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    };
  return <div style={{display:"flex"}}>
      <Div  style={myStyle}>
        <h3>BAG HIGH DISCOUNT DEALS &amp; EARN POINTS</h3>
      </Div>
      {props.children}
      </div>;
};

export default LayoutLogin;
