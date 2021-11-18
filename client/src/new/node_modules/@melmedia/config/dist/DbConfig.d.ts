import { Config } from './Config';
export declare class DbConfig extends Config {
    type: 'postgres';
    host: string;
    database: string;
    username: string;
    password: string;
    validate(): Promise<void>;
    getName(): string;
    getDefaults(): Object;
}
