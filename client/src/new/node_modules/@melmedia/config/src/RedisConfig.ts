import { Config } from './Config';
import { IsInt, IsNotEmpty, Max, Min } from 'class-validator';

export class RedisConfig extends Config {
  @IsNotEmpty()
  public host!: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1024)
  @Max(65536)
  public port!: number;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(16)
  public db!: number;

  public async validate() {
    await super.validate();
    super.validateIpOrHostname(this.host, 'host');
  }

  public getName() {
    return 'redis';
  }

}
