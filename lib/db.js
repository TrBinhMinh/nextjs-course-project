import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://tbminh:lwV4Nz4VySHxsY0W@cluster0.2hzhwhw.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );

  return client;
}
