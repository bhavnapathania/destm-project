import "./component3.css";
import Movie from "./movie";
function Component3() {
  const moviesArr = [
    {
      url: "./furry-images/Selection_102.png",
      caption: "The Amazing ",
      caption2: "Spider-Man 2",
      subcaption: "BUY NOW",
    },
    {
      url: "./furry-images/Selection_103.png",
      caption: "  Only Lovers ",
      caption2: " Left Alive ",
      subcaption: "BUY NOW",
    },
    {
      url: "./furry-images/Selection_104.png",
      caption: "The Calling ",
      subcaption: "BUY NOW",
    },
    {
      url: "/furry-images/Selection_105.png",
      caption: " Deleiver Us ",
      caption2: "From Evil",
      subcaption: "BUY NOW",
    },

    {
      url: "/furry-images/Selection_106.png",
      caption: "22 JumpStreet ",
      subcaption: "BUY NOW",
    },
    {
      url: "./furry-images/Selection_107.png",
      caption: "  Only Lovers ",
      caption2: " Left Alive ",
      subcaption: "BUY NOW",
    },
  ];
  return (
    <div className="container3">
      <h2> MOVIES ON DISC & DIGITAL </h2>
      <div className="movies">
        {moviesArr.map((value) => {
          return (
            <Movie
              key={value.url}
              url={value.url}
              caption={value.caption}
              caption2={value.caption2}
              subcaption={value.subcaption}
            />
          );
        })}
        {/* <Movie
          url={"./furry-images/Selection_102.png"}
          caption={"The Amazing "}
          caption2={"Spider-Man 2"}
          subcaption={"BUY NOW"}
        /> */}
        {/* <Movie
          url={"./furry-images/Selection_103.png"}
          caption={"  Only Lovers "}
          caption2={" Left Alive "}
          subcaption={"BUY NOW"}
        />
        <Movie
          url={"./furry-images/Selection_104.png"}
          caption={"The Calling "}
          subcaption={"BUY NOW"}
        />
        <Movie
          url={"./furry-images/Selection_105.png"}
          caption={" Deleiver Us "}
          caption2={"From Evil"}
          subcaption={"BUY NOW"}
        />
        <Movie
          url={"./furry-images/Selection_106.png"}
          caption={"22 JumpStreet "}
          subcaption={"BUY NOW"}
        />
        <Movie
          url={"./furry-images/Selection_107.png"}
          caption={"  Only Lovers "}
          caption2={" Left Alive "}
          subcaption={"BUY NOW"}
        /> */}
      </div>
    </div>
  );
}

export default Component3;
