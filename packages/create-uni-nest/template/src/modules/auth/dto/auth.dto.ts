import { ApiProperty } from 'uni-nest';

export class AuthDto {
  @ApiProperty({
    title: '用户名'
  })
  username: string;

  @ApiProperty({
    title: '密码'
  })
  password: string;
}

export class AuthVo {
  @ApiProperty({
    title: 'token'
  })
  token: string;
}
