function Card(props) {
  return (
    <div class="card">
      <img src={props.url} />
      <h3 class="card-font">
        {props.caption} <br /> {props.caption2}
      </h3>
      <p>{props.subcaption}</p>
    </div>
  );
}
export default Card;
