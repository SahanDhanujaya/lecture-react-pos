
import { MongoClient } from 'mongodb';

async function runGetStarted() {
  // Replace the uri string with your connection string
  const uri = 'mongodb+srv://devforge18_db_user:7n2VVWESiav3Gjv1@cluster-1.g6n7sjs.mongodb.net/?appName=Cluster-1';
  const client = new MongoClient(uri);

  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // Queries for a movie that has a title value of 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    await client.close();
  }
}
runGetStarted().catch(console.dir);
