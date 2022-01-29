// Import react-circular-progressbar module and styles
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Pie = (props) => {

    console.log(props.point)
const percentage = props.point/35;

  return (
    <div>
      <CircularProgressbarWithChildren 
      value={percentage} 
      strokeWidth={5} 
      styles={buildStyles({pathColor: "#AE00BB"})}>
        <div style={{ fontSize: 22, marginTop: -5 }}>
          <strong>
            {percentage * 35}
            <br></br> POINTS
          </strong>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default Pie;
