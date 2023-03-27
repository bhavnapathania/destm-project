import Button from "./btn";
import "./rightside.css";

function RightSide(props) {
  return (
    <div className="right-side">
      <div className="right-side-content">
        <h1> {props.heading} </h1>
        <p>{props.text}</p>
        <Button extraClass="btn-right-color" text={"SIGN UP"} />
      </div>
    </div>
  );
}
export default RightSide;
