import { Config } from './Config';
export declare class RedisConfig extends Config {
    host: string;
    port: number;
    db: number;
    validate(): Promise<void>;
    getName(): string;
}
