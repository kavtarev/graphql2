import { ConfigSource } from './ConfigSource';
export declare class ConfigFileChain implements ConfigSource {
    protected basePath: string;
    protected environment: string;
    constructor(basePath: string, environment: string);
    getConfig(name: string, defaults: object): any;
    protected getConfigFileChain(name: string): string[];
    protected readConfigFile(configPath: string): any;
}
