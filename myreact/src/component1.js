import "./component1.css";
import Button from "./button";
function Component1() {
  const btnArr = [
    {
      content: " NO GOOD DEED",
      content2: "NOW PLAYING",
    },
    {
      content: "EQUALIZER",
      content2: "NOW PLAYING",
    },
    {
      content: "ANNIE ",
      content2: "NOW PLAYING",
    },
    {
      content: "WEDDING RINGER",
      content2: "NOW PLAYING",
    },
  ];
  return (
    <div id="container1">
      <img src="./furry-images/Selection_109.png" alt="main image" />
      <div class="buttons">
        {/* <!-- <button class="button1">FURY <br/> NOW PLAYING</button> --> */}
        {btnArr.map((text) => {
          return (
            <Button
              key={text.content}
              content={text.content}
              content2={text.content2}
            />
          );
        })}
        {/* <Button content={" NO GOOD DEED"} content2={"NOW PLAYING"} />
        <Button content={"EQUALIZER"} content2={"NOW PLAYING"} />
        <Button content={"ANNIE "} content2={"NOW PLAYING"} />
        <Button content={"WEDDING RINGER"} content2={"NOW PLAYING"} /> */}
      </div>
    </div>
  );
}

export default Component1;
