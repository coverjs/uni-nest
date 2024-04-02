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
