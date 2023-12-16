export default function LocationCard(props) {
  return (
    <section className="location-card">
      <img src={props.item.imageUrl} />
      <div>
        <p className="uppercase">
          <i class="fa-solid fa-location-pin"></i>
          {props.item.location}
        </p>
        <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        <h2>{props.item.title}</h2>
        <p className="date">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p>{props.item.description}</p>
      </div>
    </section>
  );
}
