import "./inputfiels.css";
function InputField(props) {
  return (
    <div className="input-field-style">
      <input
        type={props.type}
        placeholder={props.value}
        required
        pattern={props.pattern}
        onChange={(x) => props.handleChange(x.target.value)}
      />
    </div>
  );
}
export default InputField;
