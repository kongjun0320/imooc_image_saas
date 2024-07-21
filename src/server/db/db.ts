import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const queryClient = postgres(
  'postgres://postgres:0320@localhost:5432/postgres'
);

export const db = drizzle(queryClient, {
  schema,
});
