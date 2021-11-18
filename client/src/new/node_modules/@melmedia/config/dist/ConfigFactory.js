"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
class ConfigFactory {
    constructor(configSource) {
        this.configSource = configSource;
    }
    async create(configConstructor) {
        const config = new configConstructor;
        class_transformer_1.plainToClassFromExist(config, this.configSource.getConfig(config.getName(), config.getDefaults()));
        await config.validate();
        return config;
    }
}
exports.ConfigFactory = ConfigFactory;
//# sourceMappingURL=ConfigFactory.js.map