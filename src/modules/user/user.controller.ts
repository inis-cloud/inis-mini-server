import { Controller, Get, Body, Delete, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './User.service';
import { UpdateUserDto } from '../../dto';

@Controller('user')
@ApiTags('文章接口')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('findAll')
  findAll() {
    return this.userService.findAll();
  }

  @Put('update')
  update(@Query('id') id: number, @Body() body: UpdateUserDto) {
    return this.userService.update(id, body);
  }

  @Delete('remove')
  remove(@Query() id: number) {
    return this.userService.remove(+id);
  }
}
