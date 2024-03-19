// Copyright 2024 hacxy
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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
}
