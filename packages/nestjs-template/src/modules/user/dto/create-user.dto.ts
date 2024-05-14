import { ApiProperty } from 'uni-nest';

export class CreateUserDto {
  @ApiProperty({
    description: '用户名',
    example: 'admin',
    required: true
  })
  username: string;

  @ApiProperty({
    description: '手机号'
  })
  mobile: string;

  @ApiProperty({
    description: '邮箱'
  })
  email: string;
}
