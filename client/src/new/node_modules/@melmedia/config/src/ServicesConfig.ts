import { injectable } from 'inversify';
import { Config } from './Config';
import { Validator } from 'class-validator';

@injectable()
export class ServicesConfig extends Config {
  [index: string]: string | Function;

  public async validate() {
    await super.validate();
    const validator = new Validator;
    for (const service in this) {
      if ('function' === typeof service) {
        continue;
      }

      if (!validator.isURL(this[service] as string, { require_tld: false })) {
        throw new Error(`Config ${this.getName()}: ${service} value must be URL`);
      }
    }
  }

  public getName() {
    return 'services';
  }

}
