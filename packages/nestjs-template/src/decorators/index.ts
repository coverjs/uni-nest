import { applyDecorators } from '@nestjs/common';
import { UniDefine } from 'uni-nest';
import { DefineApiOptions } from 'uni-nest';

// 使用装饰器聚合自定义默认的UniDefine装饰器选项
export const MyUniDefine = (options: DefineApiOptions) => {
  if (options.isPublic === undefined) options.isPublic = true;
  return applyDecorators(UniDefine(options));
};
