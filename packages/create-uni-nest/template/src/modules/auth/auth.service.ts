// import { BusinessException } from '@/common/exceptions/business.exceptions';
// import { MemberService } from '@/modules/member/member.service';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService
  ) {}
  async userLogin(account: AuthDto) {
    const token = this.jwtService.sign(
      {
        username: account.username
      },
      {
        secret: this.configService.get('JWT_SECRET'),
        expiresIn: this.configService.get('TOKEN_EXPIRES')
      }
    );

    return { token };
  }

  /**
   * 手机号授权登录
   * @param code
   * @returns
   */
  async userPhoneNumberLogin(code: string) {
    console.log(code);
    return '暂不支持';
  }
}
