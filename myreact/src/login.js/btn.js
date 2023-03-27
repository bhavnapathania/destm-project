import "./btn.css";
function Button(props) {
  return (
    <div className={"btn-left"}>
      <button className={props.extraClass}> {props.text} </button>
    </div>
  );
}
export default Button;
