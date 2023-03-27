import Leftside from "./leftside";
import Rightside from "./rightside";
import "./main.css";
function Main() {
  const leftside = {
    heading: "Sign in",
    text1: "or use your account",
    text2: "Forgot your password ?",
  };
  const rightSide = {
    heading: "Hello, Friends!",
    text: "Enter your personal details and start your journey with us",
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <Leftside
          heading={leftside.heading}
          text1={leftside.text1}
          text2={leftside.text2}
        />
        <Rightside heading={rightSide.heading} text={rightSide.text} />
      </div>
    </div>
  );
}
export default Main;
