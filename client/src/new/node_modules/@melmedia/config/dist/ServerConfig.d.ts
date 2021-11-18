import { Config } from './Config';
export declare class ServerConfig extends Config {
    host: string;
    port: number;
    workers: number;
    validate(): Promise<void>;
    getName(): string;
}
