import { ConfigSource } from './ConfigSource';
import { Config } from './Config';
export interface Newable<T> {
    new (...args: any[]): T;
}
export declare class ConfigFactory {
    protected configSource: ConfigSource;
    constructor(configSource: ConfigSource);
    create<T extends Config>(configConstructor: Newable<T>): Promise<T>;
}
