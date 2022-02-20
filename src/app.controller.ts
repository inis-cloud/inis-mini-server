import { Body, Controller, Post, SetMetadata } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
@ApiTags('全局接口')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  @SetMetadata('isPublic', true)
  login(): string {
    return this.appService.getHello();
  }

  @Post('register')
  register(@Body() body) {
    console.log(body);
  }
}
