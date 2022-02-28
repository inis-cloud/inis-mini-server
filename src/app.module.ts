import { Module } from '@nestjs/common';
import { ArticleModule } from './modules/article/article.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { MenuModule } from './modules/menu/menu.module';
import { ConnectModule } from './modules/connect/connect.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'root',
      username: 'root',
      password: 'root',
      synchronize: true,
      autoLoadEntities: true,
    }),
    ArticleModule,
    UserModule,
    MenuModule,
    ConnectModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
