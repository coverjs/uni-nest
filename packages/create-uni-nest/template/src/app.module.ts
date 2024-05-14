import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { UploadModule } from './modules/upload/upload.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, UploadModule, AuthModule, ConfigModule.forRoot({ isGlobal: true })]
})
export class AppModule {}
