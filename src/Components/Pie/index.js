// Import react-circular-progressbar module and styles
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Pie = (props) => {

    console.log(props.point)
const percentage = props.point/150;

  return (
    <div>
      <CircularProgressbarWithChildren 
      value={percentage} 
      strokeWidth={5} 
      styles={buildStyles({pathColor: "#AE00BB"})}>
        <div className="piePoint" >
          <strong style={{fontSize:"28px"}}>
            {percentage * 150}
           
          </strong>
        
            {/* <span style={{fontSize:"15px"}}>
           <br></br> WAZO
             </span>  */}
             <span style={{fontSize:"17px"}}>
             &nbsp; NGN

             </span> 
           
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default Pie;
