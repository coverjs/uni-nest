import { Body, Controller } from '@nestjs/common';
import { ApiTags, Method, UniDefine } from 'uni-nest';
import { AuthService } from './auth.service';
import { AuthDto, AuthVo } from './dto/auth.dto';

@Controller('auth')
@ApiTags('授权')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UniDefine({
    method: Method.Post,
    summary: '授权接口',
    description: '登录授权获取token',
    isPublic: true,
    response: {
      type: AuthVo
    },
    body: {
      type: AuthDto
    }
  })
  login(@Body() account: AuthDto) {
    return this.authService.userLogin(account);
  }
}
