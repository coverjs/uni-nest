import {
  Body,
  Controller,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Method, UniDefine, ApiConsumes } from 'uni-nest';
import { UserDto } from './dto/index.dto';
import {
  FileInterceptor,
  FilesInterceptor,
  FileFieldsInterceptor,
} from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UniDefine({
    summary: 'GET请求示例',
    method: Method.Get,
    description: '这是一个获取 Hello World 字符串的接口',
    isPublic: true,
  })
  getHello(): string {
    return this.appService.getHello();
  }

  @UniDefine({
    summary: 'POST请求示例',
    method: Method.Post,
    isPublic: true,
    body: {
      type: UserDto,
    },
    response: {
      model: UserDto,
    },
    description: '新增一个用户',
  })
  addUser(@Body() userInfo: UserDto) {
    this.appService.addUser(userInfo);
  }

  @UniDefine({
    method: Method.Post,
    path: '/upload/file',
    summary: '上传单个文件的示例',
    isPublic: true,
    body: {
      schema: {
        type: 'object',
        properties: {
          file: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    },
    response: {
      type: 'string',
    },
  })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }

  @UniDefine({
    method: Method.Post,
    summary: '上传多个文件的示例',
    path: '/upload/files',
    body: {
      schema: {
        type: 'object',
        properties: {
          files: {
            type: 'array', // 👈  array of files
            items: {
              type: 'string',
              format: 'binary',
            },
          },
        },
      },
    },
    response: {
      type: 'string',
    },
  })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FilesInterceptor('files'))
  uploads(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
  }

  @UniDefine({
    method: Method.Post,
    path: '/upload/fields',
    summary: '按字段上传文件的示例',
    isPublic: true,
    body: {
      schema: {
        type: 'object',
        properties: {
          // 👈  field names need to be repeated for swagger
          avatar: {
            type: 'string',
            format: 'binary',
          },
          background: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    },
  })
  @UseInterceptors(
    FileFieldsInterceptor([
      // 👈  multiple files with different field names
      { name: 'avatar', maxCount: 1 },
      { name: 'background', maxCount: 1 },
    ]),
  )
  @ApiConsumes('multipart/form-data')
  uploadMultipleFiles(@UploadedFiles() files: Express.Multer.File[]) {
    console.log(files);
  }
}
