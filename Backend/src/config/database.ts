import { DataSourceOptions } from 'typeorm';
import {
  MODE_ENV,
  MYSQL_DATABASE,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  MONGO_HOST,
  MONGO_COLLECTION,
} from './config';

export const mysqlConfig: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  database: MYSQL_DATABASE,
  username: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  //   entities: [Todo],
  entities: [
    `${MODE_ENV === 'development' ? 'src/' : 'dist/src/'}entities/*.{.js,.ts}`,
  ],
  synchronize: false,
};

export const mongoConfig = {
  host: `${MONGO_HOST}`,
  collection: `${MONGO_COLLECTION}`,
};
