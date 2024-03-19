import { AppModule } from './app.module';
import { bootstrap } from 'uni-nestjs';

bootstrap(AppModule, {
  swaggerOptions: {
    title: '测试swagger docs',
  },
  jwtVerifyOptions: {
    secret: 'ss',
  },
});
