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

import { ApiProperty } from '@nestjs/swagger';

export class BaseDataVo {
  @ApiProperty({ description: 'id, 唯一标识' })
  id: number;
  @ApiProperty({ description: '创建时间', example: '2023-05-08 01:58:24' })
  createdAt?: string;
  @ApiProperty({ description: '更新时间', example: '2023-05-08 01:58:24' })
  updatedAt?: string;
}

// 公共返回类型
export class CommonResponseVo {
  @ApiProperty({ description: '响应状态码', default: 0 })
  code: number;

  @ApiProperty({ description: '响应信息', default: 'ok' })
  msg: string;
}
