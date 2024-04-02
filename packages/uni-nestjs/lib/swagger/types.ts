// import { Type } from '@nestjs/common';

import { Type } from '@nestjs/common';

export interface SwaggerOptions {
  /**
   * 标题
   */
  title?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 联系人信息
   */
  contact?: [name?: string, url?: string, email?: string];
  /**
   * 版本号
   */
  version?: string;
  /**
   * 协议
   */
  license?: [name?: string, url?: string];

  /**
   * swagger接口文档地址前缀
   */
  swaggerPathPrefix?: string;

  customResponseType?: Type<any>;

  customResponseDataWrapperField?: string;
}
