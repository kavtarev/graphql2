import { IsEnum, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Config } from './Config';

export enum LogType {
  file = 'file',
  dateFile = 'dateFile',
  console = 'console',
}

export class LogCategoryConfig {
  @IsNotEmpty()
  @IsString()
  @IsEnum(LogType)
  public type!: LogType;

  @IsOptional()
  @IsString()
  public filename!: string;

  @IsString()
  @IsNotEmpty()
  public level!: string;
}

export class LogConfig extends Config {
  @ValidateNested()
  public main!: LogCategoryConfig;
  @ValidateNested()
  public access!: LogCategoryConfig;

  public getName() {
    return 'log';
  }

  public async validate() {
    await super.validate();

    this.validateCategory(this.main, 'main');
    this.validateCategory(this.access, 'access');
  }

  protected validateCategory(categoryConfig: LogCategoryConfig, category: string) {
    if ('file' === categoryConfig.type) {
      if (!categoryConfig.filename) {
        throw new Error(
          `Config ${this.getName()}: ${category} of type file must have filename set`,
        );
      }
    }
  }

}
