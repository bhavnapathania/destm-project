import "./leftside.css";
import InputField from "./inputfield";
import Button from "./btn";
import CheckBox from "../CheckBox";
import { useState } from "react";
function Leftside(props) {
  const [visibility, setVisibility] = useState(false);
  console.log(visibility);
  const [name, setName] = useState("");
  console.log(name);
  const [password, setPassword] = useState("");
  console.log(password);

  return (
    <div className="left-side">
      <div className="left-side-content">
        <h2>{props.heading}</h2>
        <p>{props.text1}</p>
        <form>
          <InputField
            type={"email"}
            typetypetype
            value={"Email"}
            pattern={".+@gmail.com"}
            namee={name}
            handleChange={setName}
          />
          <InputField
            type={visibility ? "text" : "password"}
            value={"Password (minimum 8 characters long)"}
            minlength={"8"}
            password={password}
            handleChange={setPassword}
          />
          <CheckBox
            type={"checkbox"}
            visibility={visibility}
            setVisibility={setVisibility}
          />
          <p>{props.text2}</p>
          <Button extraClass="btn-left-color" text={"SIGN IN"} />
        </form>
      </div>
    </div>
  );
}
export default Leftside;
