import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// 参数装饰器，方便通过token拿到用户信息
export const User = createParamDecorator((_: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});
