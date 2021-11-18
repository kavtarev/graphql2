"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = require("./Config");
const class_validator_1 = require("class-validator");
class RedisConfig extends Config_1.Config {
    async validate() {
        await super.validate();
        super.validateIpOrHostname(this.host, 'host');
    }
    getName() {
        return 'redis';
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], RedisConfig.prototype, "host", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsInt(),
    class_validator_1.Min(1024),
    class_validator_1.Max(65536),
    __metadata("design:type", Number)
], RedisConfig.prototype, "port", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsInt(),
    class_validator_1.Min(0),
    class_validator_1.Max(16),
    __metadata("design:type", Number)
], RedisConfig.prototype, "db", void 0);
exports.RedisConfig = RedisConfig;
//# sourceMappingURL=RedisConfig.js.map