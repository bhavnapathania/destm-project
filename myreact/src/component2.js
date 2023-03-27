import "./component2.css";
import Card from "./card";
function Component2() {
  const movieArr = [
    {
      caption: "ANGRY BIRDS",
      caption2: "MOVIE",
      subcaption: "Casting Announcement",
      url: "./furry-images/Selection_098.png",
    },
    {
      caption: "ANNIE",
      subcaption: "Dolor Sit Amet Sola Del",
      url: "./furry-images/Selection_099.png",
    },
    {
      caption: "ANNIE",
      subcaption: "Music Video: Hard Knock Life",
      url: "./furry-images/Selection_100.png",
    },
    {
      caption: "HOTEL",
      caption2: "TRANSYLVANIA 2",
      subcaption: "Dolor Sit Amet Sola Del",
      url: "./furry-images/Selection_101.png",
    },
  ];

  return (
    <div className="container2">
      <div className="head1">
        <h2>WHAT'S TRENDING</h2>
      </div>
      <div className="head2">
        <h5>OUR NEW UPCOMIG RELEASES</h5>
      </div>
      <div className="card-container">
        {movieArr.map((movie) => {
          return (
            <Card
              key={movie.caption}
              caption={movie.caption}
              caption2={movie.caption2}
              subcaption={movie.subcaption}
              url={movie.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Component2;
