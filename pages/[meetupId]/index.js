import { ObjectId } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { connect } from "../api/new-meetup";


function MeetupDetailPage(props) {
  
  return (
    <Fragment>
      <Head>
        <title>Add A New Meetup</title>
        <meta name='description' content={props.meetup.description} />
      </Head>
      <MeetupDetail meetup={props.meetup} />
    </Fragment>
  )
}

export async function getStaticPaths() {
  const { client, dbcollection } = await connect("meetups");
  const meetups = await dbcollection.find({}, {_id: 1}).toArray();
  client.close();

  return {
    fallback: false,
    paths: meetups.map(meetup => ({params: { meetupId: meetup._id.toString() }}))
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const { client, dbcollection } = await connect("meetups")
  const meetup = await dbcollection.findOne({_id: ObjectId(meetupId)})
  client.close()

  
  console.log(meetup)

  return {
    props: {
      meetup: {
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        image: meetup.image
      }
    }
  }
}

export default MeetupDetailPage;