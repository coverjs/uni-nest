import { Controller, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor, FilesInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';
import { UniDefine, Method, ApiConsumes, ApiTags } from 'uni-nest';

@ApiTags('上传')
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @UniDefine({
    method: Method.Post,
    path: '/file',
    summary: '上传单个文件的示例',
    body: {
      schema: {
        type: 'object',
        properties: {
          file: {
            type: 'string',
            format: 'binary'
          }
        }
      }
    }
    // response: {
    //   type: 'string'
    // }
  })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }

  @UniDefine({
    method: Method.Post,
    summary: '上传多个文件的示例',
    path: '/files',
    body: {
      schema: {
        type: 'object',
        properties: {
          files: {
            type: 'array',
            items: {
              type: 'string',
              format: 'binary'
            }
          }
        }
      }
    }
    // response: {
    //   type: 'string'
    // }
  })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FilesInterceptor('files'))
  uploads(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
  }

  @UniDefine({
    method: Method.Post,
    path: '/fields',
    summary: '按字段上传文件的示例',
    body: {
      schema: {
        type: 'object',
        properties: {
          avatar: {
            type: 'string',
            format: 'binary'
          },
          background: {
            type: 'string',
            format: 'binary'
          }
        }
      }
    }
  })
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'avatar', maxCount: 1 },
      { name: 'background', maxCount: 1 }
    ])
  )
  @ApiConsumes('multipart/form-data')
  uploadMultipleFiles(@UploadedFiles() files: Express.Multer.File[]) {
    console.log(files);
  }
}
