import { IsEnum, IsString } from 'class-validator';
import { UserRole } from 'src/enum/indxe';

export class UpdateUserDto {
  @IsEnum(UserRole)
  readonly role?: UserRole;

  @IsString()
  readonly description?: string;

  @IsString()
  readonly avatar?: string;

  @IsString()
  readonly username?: string;

  @IsString()
  readonly password?: string;
}
