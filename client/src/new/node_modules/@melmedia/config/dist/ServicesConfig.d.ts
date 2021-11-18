import { Config } from './Config';
export declare class ServicesConfig extends Config {
    [index: string]: string | Function;
    validate(): Promise<void>;
    getName(): string;
}
