import { Module, Global } from '@nestjs/common';
import { Client } from 'pg';
import { ConfigType } from '@nestjs/config';
import config from '../config';

const client = new Client({  // 👈 client
  user: 'postgres',
  host: 'localhost',
  database: 'platzi_db',
  password: '123456',
  port: 5432,
});

client.connect();

const API_KEY = '123453421';
const API_KEY_PROD = '123453421654';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'PG', 
      useFactory: (configService: ConfigType<typeof config>) => { // 👈 
        const { user, host, dbName, password, port } = configService.postgres;
        const client = new Client({
          user,
          host,
          database: dbName,
          password,
          port,
        });
        client.connect();
        return client;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['API_KEY', 'PG'], // 👈 add in exports
})
export class DatabaseModule {}
