import Head from 'next/head';
import { Fragment } from 'react';
import MeetupList  from '../components/meetups/MeetupList';
import { connect } from './api/new-meetup';


export default function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>React Nextjs Meetups</title>
        <meta name='description' content='Browse a huge list of highly active react nextjs meetups' />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  )
}

export async function getStaticProps() {
  const { client, dbcollection } = await  connect('meetups');
  const meetups = await dbcollection.find().toArray();
  console.log(meetups)
  client.close()
  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 10
  }
}


// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // Fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }