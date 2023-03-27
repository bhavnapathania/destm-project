function CheckBox(props) {
  return (
    <>
      <input
        type={props.type}
        checked={props.visibility}
        onChange={() => props.setVisibility(!props.visibility)}
      />
    </>
  );
}
export default CheckBox;
