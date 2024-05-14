import { AppModule } from './app.module';
import { bootstrap } from 'uni-nest';

bootstrap(AppModule, {
  swaggerOptions: {
    title: 'nestjs模板接口文档',
    description: '这是一个nestjs模板项目的接口文档',
    version: '1.0.0',
    license: ['MIT']
  },
  jwtVerifyOptions: {
    secret: process.env.JWT_SECRET
  }
});
