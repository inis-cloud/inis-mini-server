import { Controller, Get, Body, Delete, Put, Query, Post, UsePipes, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { LoginUserDto, RegisterUserDto, UpdateUserDto } from '../../dto';
import { PassWordPipe } from './user.pipe';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller('user')
@ApiTags('用户接口')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('findAll')
  findAll() {
    return this.userService.findAll();
  }

  @Post('login')
  login(@Body() body: LoginUserDto) {
    return this.userService.login(body);
  }

  @Post('register')
  @UsePipes(PassWordPipe)
  register(@Body() body: RegisterUserDto) {
    return this.userService.register(body);
  }

  @UseGuards(JwtAuthGuard)
  @Put('update')
  @UsePipes(PassWordPipe)
  update(@Query('id') id: number, @Body() body: UpdateUserDto) {
    return this.userService.update(id, body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('remove')
  remove(@Query() id: number) {
    return this.userService.remove(id);
  }
}
