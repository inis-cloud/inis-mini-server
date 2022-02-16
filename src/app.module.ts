import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './modules/article/article.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ArticleModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '182.92.220.149',
      port: 3306,
      username: 'test_123mtr_top',
      password: 'G8CphskeyRHY8HJa',
      database: 'test_123mtr_top',
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
