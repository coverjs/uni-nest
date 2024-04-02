// import { ApiProperty } from 'uni-nest';
import { AppModule } from './app.module';
import { bootstrap } from 'uni-nest';
// class CommonVo {
//   @ApiProperty()
//   statusCode: number;
//   @ApiProperty()
//   message: string;
// }

bootstrap(AppModule, {
  swaggerOptions: {
    title: '测试swagger docs',
    // customResponseType: CommonVo,
  },
  jwtVerifyOptions: {
    secret: 'ss',
  },
});
