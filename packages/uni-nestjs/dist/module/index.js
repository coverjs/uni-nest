"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUniModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const exceptions_1 = require("../exceptions");
const guard_1 = require("../guard");
const interceptor_1 = require("../interceptor");
const handleUniModule = (module, options) => {
    let UniAppModule = class UniAppModule {
    };
    UniAppModule = __decorate([
        (0, common_1.Module)({
            imports: [module],
            providers: [
                {
                    provide: "JwtVerifyOptions",
                    useValue: options?.jwtVerifyOptions || {},
                },
                {
                    provide: core_1.APP_GUARD,
                    useClass: guard_1.JwtAuthGuard,
                },
                // 统一响应格式
                {
                    provide: core_1.APP_INTERCEPTOR,
                    useValue: new interceptor_1.UniResponseInterceptor(),
                },
                // 注册基本错误过滤器
                {
                    provide: core_1.APP_FILTER,
                    useClass: exceptions_1.UniBaseExceptionsFilter,
                },
                // 注册http错误过滤器
                {
                    provide: core_1.APP_FILTER,
                    useClass: exceptions_1.UniHttpExeptionsFilter,
                },
            ],
        })
    ], UniAppModule);
    return UniAppModule;
};
exports.handleUniModule = handleUniModule;
//# sourceMappingURL=index.js.map