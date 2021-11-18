export interface ConfigSource {
    getConfig(name: string, defaults: object): object;
}
