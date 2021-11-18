"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const Config_1 = require("./Config");
const class_validator_1 = require("class-validator");
let ServicesConfig = class ServicesConfig extends Config_1.Config {
    async validate() {
        await super.validate();
        const validator = new class_validator_1.Validator;
        for (const service in this) {
            if ('function' === typeof service) {
                continue;
            }
            if (!validator.isURL(this[service], { require_tld: false })) {
                throw new Error(`Config ${this.getName()}: ${service} value must be URL`);
            }
        }
    }
    getName() {
        return 'services';
    }
};
ServicesConfig = __decorate([
    inversify_1.injectable()
], ServicesConfig);
exports.ServicesConfig = ServicesConfig;
//# sourceMappingURL=ServicesConfig.js.map