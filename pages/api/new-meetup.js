import { MongoClient } from 'mongodb';

export async function connect (collection) {
  const client =  await MongoClient.connect("mongodb://localhost/nextappdb")
  const db = client.db();

  const dbcollection = db.collection(collection);
  return {client, dbcollection};
} 


async function handler(req, res) {
  if (req.method == 'POST') {
    const {client, dbcollection} = await connect();
    const result = await dbcollection.insertOne(req.body);
    console.log(result);

    client.close();

    res.status(201).json({success: true, code: 201, message: 'meetup created'})
  }
}

export default handler;