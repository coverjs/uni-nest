import { ApiProperty } from '@nestjs/swagger';

export class AppValue {
  @ApiProperty()
  name: string;
}
