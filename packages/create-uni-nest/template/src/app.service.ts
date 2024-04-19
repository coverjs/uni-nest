import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/dto/index.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  addUser(userInfo: UserDto) {
    return userInfo;
  }
}
