import { MongoClient, Db } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('MONGODB_URI çevre değişkeni tanımlanmamış');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // Development modunda global değişken kullan
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // Production modunda yeni client oluştur
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

// Database bağlantısını al
export async function getDatabase(): Promise<Db> {
  const client = await clientPromise;
  return client.db('kiraz-bilisim');
}
