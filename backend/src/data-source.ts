import 'reflect-metadata';
import { DataSource } from 'typeorm';
import User from './models/user';
import Team from './models/team';
import StandupNote from './models/standup';
import Organization from './models/organization';
import Schedule from './models/schedule';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false, // use migrations in production
  logging: true,
  entities: [User, Team, StandupNote, Organization, Schedule],
  migrations: ['src/migrations/*.ts'],
});
