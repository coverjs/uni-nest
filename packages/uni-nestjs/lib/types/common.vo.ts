import { ApiProperty } from '@nestjs/swagger';

// 公共返回类型
export class CommonResponseVo {
  @ApiProperty({ description: '响应状态码', default: 0 })
  code: number;

  @ApiProperty({ description: '响应信息', default: 'ok' })
  msg: string;
}
