import { PartialType } from '@nestjs/swagger';
import { LoginUserDto } from '..';

export class RegisterUserDto extends PartialType(LoginUserDto) {}
