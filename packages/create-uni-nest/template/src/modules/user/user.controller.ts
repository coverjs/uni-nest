import { Controller, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, Method, UniDefine } from 'uni-nest';

@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UniDefine({
    summary: '创建用户',
    method: Method.Post,
    body: {
      type: CreateUserDto
    }
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @UniDefine({
    summary: '查询所有用户',
    method: Method.Get
  })
  findAll() {
    return this.userService.findAll();
  }

  @UniDefine({
    summary: '查询单个用户',
    method: Method.Get,
    path: '/:id'
  })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @UniDefine({
    summary: '更新用户',
    method: Method.Patch,
    path: '/:id',
    body: {
      type: UpdateUserDto
    }
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @UniDefine({
    summary: '删除用户',
    method: Method.Delete,
    path: '/:id'
  })
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
