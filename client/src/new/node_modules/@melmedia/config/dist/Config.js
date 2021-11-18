"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const class_validator_1 = require("class-validator");
let Config = class Config {
    async validate() {
        const errors = await class_validator_1.validate(this);
        if (errors.length) {
            throw new Error(`Validation failed for config ${this.getName()}, errors: ${JSON.stringify(errors)}`);
        }
    }
    getDefaults() {
        return {};
    }
    validateIpOrHostname(value, propertyName) {
        const validator = new class_validator_1.Validator;
        if (!(validator.isIP(value) || validator.isFQDN(value, { require_tld: false }))) {
            throw new Error(`Config ${this.getName()}: ${propertyName} must be IP or hostname`);
        }
    }
};
Config = __decorate([
    inversify_1.injectable()
], Config);
exports.Config = Config;
//# sourceMappingURL=Config.js.map