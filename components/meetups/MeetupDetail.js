import Image from "next/image";
import classes from './MeetupDetail.module.css';

function MeetupDetail(props) {
  console.log(props)
  return (
    <section className={classes.detail}>
      <img src={props.meetup.image} alt="image" />
      <h1>{props.meetup.title}</h1>
      <address>{props.meetup.address}</address>
      <p>{props.meetup.description}</p>
    </section>
  )
}

export default MeetupDetail;