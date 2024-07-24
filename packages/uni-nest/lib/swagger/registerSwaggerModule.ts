import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerOptions } from './types';
import { CommonResponseVo } from '../schemas';

export const registerSwaggerModule = (app: INestApplication, swaggerOptions: SwaggerOptions) => {
  if (!swaggerOptions) return;
  const { title, description, contact = [], version, license = [], swaggerPathPrefix = '/docs' } = swaggerOptions;

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle(title)
    .setDescription(description)
    .setContact(...contact)
    .setVersion(version)
    .setLicense(...license)
    .build();

  const document = SwaggerModule.createDocument(app, options, {
    // 项目内未使用，但是要被swagger模块使用的类，需要在此处进行声明
    // (公共的放这里，控制器中使用的可以在 @ApiExtraModels() 装饰器中定义)
    extraModels: [CommonResponseVo]
  });
  SwaggerModule.setup(swaggerPathPrefix, app, document);
};
