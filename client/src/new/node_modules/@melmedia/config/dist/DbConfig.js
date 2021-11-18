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
const inversify_1 = require("inversify");
const class_validator_1 = require("class-validator");
const Config_1 = require("./Config");
let DbConfig = class DbConfig extends Config_1.Config {
    async validate() {
        super.validate();
        super.validateIpOrHostname(this.host, 'host');
    }
    getName() {
        return 'db';
    }
    getDefaults() {
        return {
            type: 'postgres',
            logging: 'all',
            cli: {
                migrationsDir: 'src/migrations',
            },
        };
    }
};
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], DbConfig.prototype, "host", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], DbConfig.prototype, "database", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], DbConfig.prototype, "username", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], DbConfig.prototype, "password", void 0);
DbConfig = __decorate([
    inversify_1.injectable()
], DbConfig);
exports.DbConfig = DbConfig;
//# sourceMappingURL=DbConfig.js.map