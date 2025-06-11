import { Client } from 'pg';

// акутальные данные для подключения к бд
export default async () => {
  const client = new Client({
    user: 'postgres',
    password: 'пароль',
    host: 'localhost',
    port: '5432',
    database: 'newForTren',
  });

  await client.connect();
  return client;
};