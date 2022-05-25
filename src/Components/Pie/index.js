import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Pie = (props) => {
  console.log(props.point);

  const percentage = (props.point * 100) / 250;

  return (
    <div>
      <CircularProgressbarWithChildren
        value={percentage}
        strokeWidth={5}
        styles={buildStyles({ pathColor: "red" })}
      >
        <div className="piePoint">
          <strong style={{ fontSize: "20px" }}>{props.point}</strong>

          <br></br>
          {/* <span style={{ fontSize: "17px" }}>&nbsp; NGN</span> */}
          <span style={{ fontSize: "17px" }}>&nbsp; POINTS</span>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default Pie;
