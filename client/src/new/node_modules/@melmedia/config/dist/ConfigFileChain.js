"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deepExtend = require("deep-extend");
class ConfigFileChain {
    constructor(basePath, environment) {
        this.basePath = basePath;
        this.environment = environment;
    }
    getConfig(name, defaults) {
        return deepExtend.apply(undefined, [defaults].concat(this.getConfigFileChain(name).map(configFilePath => this.readConfigFile(configFilePath))));
    }
    getConfigFileChain(name) {
        return [
            `${this.basePath}/base/${name}.json`,
            `${this.basePath}/base/${name}.js`,
            `${this.basePath}/${this.environment}/${name}.json`,
            `${this.basePath}/${this.environment}/${name}.js`,
            `${this.basePath}/local/${name}.json`,
            `${this.basePath}/local/${name}.js`,
        ];
    }
    readConfigFile(configPath) {
        try {
            return require(configPath);
        }
        catch (e) {
            return {};
        }
    }
}
exports.ConfigFileChain = ConfigFileChain;
//# sourceMappingURL=ConfigFileChain.js.map