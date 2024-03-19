"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpAddress = void 0;
const common_1 = require("@nestjs/common");
const requestIp = require("request-ip");
// 获取真实ip
exports.IpAddress = (0, common_1.createParamDecorator)((_, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    if (req.clientIp)
        return req.clientIp;
    const ip = requestIp.getClientIp(req).split("::ffff:");
    return ip[ip.length - 1];
});
//# sourceMappingURL=ipAddress.js.map