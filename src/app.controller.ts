import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RegisterPipe } from './app.pipe';
import { AppService } from './app.service';
import { CreateUserDto } from './common/dto';

@Controller()
@ApiTags('全局接口')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @UseGuards(JwtAuthGuard)
  @Post('login')
  login(@Body() body) {
    return this.appService.login(body);
  }

  @Post('register')
  @UsePipes(RegisterPipe)
  register(@Body() body: CreateUserDto) {
    return this.appService.register(body);
  }
}
