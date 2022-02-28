import { Module } from '@nestjs/common';
import { ArticleModule } from './modules/article/article.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { MenuModule } from './modules/menu/menu.module';
import { ConnectModule } from './modules/connect/connect.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ArticleModule, UserModule, MenuModule, ConnectModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
