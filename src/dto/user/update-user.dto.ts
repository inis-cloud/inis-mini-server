import { IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  readonly role?: string;

  @IsString()
  readonly description?: string;

  @IsString()
  readonly avatar?: string;

  @IsString()
  readonly username?: string;

  @IsString()
  readonly password?: string;
}
