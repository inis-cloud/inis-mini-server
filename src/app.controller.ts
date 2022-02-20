import { Controller, Get, SetMetadata } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
@ApiTags('全局接口')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @SetMetadata('isPublic', true)
  login(): string {
    return this.appService.getHello();
  }
}
