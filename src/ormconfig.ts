import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'udemy',
    password: '123',
    database: 'udemy',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true
};
export default config;