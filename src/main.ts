import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './filter/all.filter';
import { AllInterceptor } from './interceptors/all.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder().setTitle('INIS').setDescription('基于Node的REST_API服务').setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      // 自动转换为Dto所期望的类型
      transform: true,
      // 多传过滤
      whitelist: true,
      // 剥离非白名单属性，验证程序将抛出一个错误
      forbidNonWhitelisted: true,
      // 验证程序将跳过验证对象中未定义的所有属性的验证
      skipUndefinedProperties: true,
      // 验证程序将跳过验证对象中所有为null的属性的验证
      skipNullProperties: true,
      // 则当出现问题时，类验证器将向控制台打印额外的警告消息
      enableDebugMessages: true,
    }),
  );
  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalInterceptors(new AllInterceptor());

  await app.listen(3000);
}
bootstrap();
