export declare abstract class Config {
    validate(): Promise<void>;
    abstract getName(): string;
    getDefaults(): object;
    protected validateIpOrHostname(value: string, propertyName: string): void;
}
