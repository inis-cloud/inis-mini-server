import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './modules/article/article.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entityes/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { jwtConstants } from './common/constants/jwt-constants';

@Module({
  imports: [
    ArticleModule,
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '182.92.220.149',
      port: 3306,
      database: 'test_123mtr_top',
      username: 'test_123mtr_top',
      password: 'ETcBHZbCrmMDShcy',
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
