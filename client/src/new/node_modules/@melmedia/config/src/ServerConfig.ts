import * as os from 'os';
import { injectable } from 'inversify';
import { Config } from './Config';
import { IsInt, IsNotEmpty, IsOptional, Max, Min } from 'class-validator';

@injectable()
export class ServerConfig extends Config {
  @IsNotEmpty()
  public host!: string;

  @IsInt()
  @IsNotEmpty()
  @Min(1024)
  @Max(65536)
  public port!: number;

  @IsOptional()
  @IsInt()
  @Min(2)
  @Max(os.cpus().length)
  public workers!: number;

  public async validate() {
    await super.validate();
    super.validateIpOrHostname(this.host, 'host');
  }

  public getName(): string {
    return 'server';
  }

}
