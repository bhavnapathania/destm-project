function Movie(props) {
  return (
    <div className="movie">
      <img src={props.url} />
      <p>
        {props.caption} <br /> {props.caption2}
      </p>
      <div>{props.subcaption}</div>
    </div>
  );
}

export default Movie;
