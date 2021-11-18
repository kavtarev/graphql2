import { Config } from './Config';
export declare enum LogType {
    file = "file",
    dateFile = "dateFile",
    console = "console"
}
export declare class LogCategoryConfig {
    type: LogType;
    filename: string;
    level: string;
}
export declare class LogConfig extends Config {
    main: LogCategoryConfig;
    access: LogCategoryConfig;
    getName(): string;
    validate(): Promise<void>;
    protected validateCategory(categoryConfig: LogCategoryConfig, category: string): void;
}
