import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import * as requestIp from "request-ip";

// 获取真实ip
export const IpAddress = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    if (req.clientIp) return req.clientIp;
    const ip = requestIp.getClientIp(req).split("::ffff:");
    return ip[ip.length - 1];
  },
);
