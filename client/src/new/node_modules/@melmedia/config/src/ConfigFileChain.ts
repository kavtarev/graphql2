import { ConfigSource } from './ConfigSource';
import * as deepExtend from 'deep-extend';

export class ConfigFileChain implements ConfigSource {
  protected basePath: string;
  protected environment: string;

  constructor(basePath: string, environment: string) {
    this.basePath = basePath;
    this.environment = environment;
  }

  public getConfig(name: string, defaults: object) {
    return deepExtend.apply(undefined, [defaults].concat(
      this.getConfigFileChain(name).map(
        configFilePath => this.readConfigFile(configFilePath),
      ),
    ) as any);
  }

  protected getConfigFileChain(name: string) {
    return [
      `${this.basePath}/base/${name}.json`,
      `${this.basePath}/base/${name}.js`,
      `${this.basePath}/${this.environment}/${name}.json`,
      `${this.basePath}/${this.environment}/${name}.js`,
      `${this.basePath}/local/${name}.json`,
      `${this.basePath}/local/${name}.js`,
    ];
  }

  protected readConfigFile(configPath: string) {
    try {
      return require(configPath);
    } catch (e) {
      return {};
    }
  }

}
