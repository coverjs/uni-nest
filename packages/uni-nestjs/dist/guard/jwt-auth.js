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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("../constants");
const business_exceptions_1 = require("../exceptions/business.exceptions");
/**
 * jwt全局校验守卫
 *
 * 这里没有使用官方文档中的 passport-jwt 策略库来对token进行校验是为了完全控制自定义抛出异常的逻辑。
 * 而 passport-jwt 策略库会帮我们抛出401状态码的异常，且错误信息不太好控制，所以我使用的是手动自定义校验
 * 在守卫中还存在一个小问题，就是在这里抛出的异常进入到异常过滤器后从response中拿到的状态码永远是默认的 200 ，即使使用 HttpCode 自定义状态码也不生效（在中间件和守卫中表现均如此，而在其他生命周期中拿到的就是我们定义的HttpCode）
 * 为了在抛出业务层异常时，异常状态码能与我们定义的httpCode保持一致，所以使用了元数据反射拿到了 businessHttpCode 并将这个值手动保存至res.statusCode中（见41行）
 * businessHttpCode 是在 DefineApi 装饰器聚合中拿到 httpCode 值并自动注入的
 */
let JwtAuthGuard = class JwtAuthGuard {
    constructor(jwtVerifyOptions, reflector) {
        this.reflector = reflector;
        this.jwtVerifyOptions = jwtVerifyOptions;
    }
    canActivate(context) {
        // 获取request对象
        const [req, res] = context.getArgs();
        // 获取请求头中的 authorization 字段
        const token = context
            .switchToRpc()
            .getData()
            .headers.authorization?.replace("Bearer ", "");
        // 获取公开状态
        const isPublic = this.reflector.getAllAndOverride(constants_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        // 公开接口直接通过
        if (isPublic)
            return true;
        // 获取控制器中定义的 httpCode，在守卫中抛出异常时使用
        const httpCode = this.reflector.getAllAndOverride(constants_1.BUSINESS_HTTP_CODE_KEY, [context.getHandler(), context.getClass()]);
        res.statusCode = httpCode || 200;
        // 验证token的合理性以及根据token做响应的操作
        if (token) {
            // 手动校验 token
            try {
                const jwtService = new jwt_1.JwtService();
                const verifyRes = jwtService.verify(token, this.jwtVerifyOptions);
                // 写入对象
                req.user = verifyRes;
                return true;
            }
            catch (e) {
                business_exceptions_1.UniBusinessException.throwInvalidToken();
            }
        }
        else {
            business_exceptions_1.UniBusinessException.throwInvalidToken();
        }
    }
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("JwtVerifyOptions")),
    __metadata("design:paramtypes", [Object, core_1.Reflector])
], JwtAuthGuard);
//# sourceMappingURL=jwt-auth.js.map