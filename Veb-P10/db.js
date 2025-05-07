import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  user: 'your_db_user',
  host: 'localhost',
  database: 'library',
  password: 'your_db_password',
  port: 5432
});
