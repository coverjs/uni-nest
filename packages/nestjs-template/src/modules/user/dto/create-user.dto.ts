import { ApiProperty } from 'uni-nest';

export class CreateUserDto {
  @ApiProperty({ title: '用户名', description: '用户名', example: 'admin' })
  username: string;
  @ApiProperty({ title: '密码', description: '密码', example: '123456' })
  password: string;
  @ApiProperty({
    title: '邮箱',
    description: '邮箱',
    example: 'admin@example.com',
  })
  email: string;
}
