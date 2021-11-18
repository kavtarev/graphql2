import { injectable } from 'inversify';
import { IsNotEmpty, IsString } from 'class-validator';
import { Config } from './Config';

@injectable()
export class DbConfig extends Config {
  public type!: 'postgres';

  @IsNotEmpty()
  public host!: string;

  @IsNotEmpty()
  @IsString()
  public database!: string;

  @IsNotEmpty()
  @IsString()
  public username!: string;

  @IsNotEmpty()
  @IsString()
  public password!: string;

  public async validate() {
    super.validate();
    super.validateIpOrHostname(this.host, 'host');
  }

  public getName(): string {
    return 'db';
  }

  public getDefaults(): Object {
    return {
      type: 'postgres',
      logging: 'all',
      cli: {
        migrationsDir: 'src/migrations',
      },
    };
  }

}
