import { injectable } from 'inversify';
import { validate, Validator } from 'class-validator';

@injectable()
export abstract class Config {

  public async validate() {
    const errors = await validate(this);
    if (errors.length) {
      throw new Error(
        `Validation failed for config ${this.getName()}, errors: ${JSON.stringify(errors)}`,
      );
    }
  }

  public abstract getName(): string;

  public getDefaults(): object {
    return {};
  }

  protected validateIpOrHostname(value: string, propertyName: string) {
    const validator = new Validator;
    if (!(validator.isIP(value) || validator.isFQDN(value, { require_tld: false }))) {
      throw new Error(`Config ${this.getName()}: ${propertyName} must be IP or hostname`);
    }
  }

}
