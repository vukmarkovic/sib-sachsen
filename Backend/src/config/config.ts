import * as dotenv from 'dotenv';

dotenv.config();

export const {
  PORT,
  API_URL,
  MODE_ENV,
  MYSQL_DATABASE,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,

  MONGO_HOST,
  MONGO_DATABASE,
  MONGO_COLLECTION,
  MONGO_USER,
  MONGO_PASSWORD,
} = process.env;
