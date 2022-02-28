import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { UserRole } from 'src/enum/indxe';
export class FindOneMenuDto {
  @IsNotEmpty()
  @IsNumber()
  readonly id: number;

  @IsNotEmpty()
  @IsString()
  readonly label: string;

  @IsNotEmpty()
  @IsString()
  readonly value: string;

  @IsEnum(UserRole)
  readonly role?: UserRole;

  @IsString()
  readonly icon?: string;

  @IsString()
  readonly path?: string;

  @IsBoolean()
  readonly disabled?: boolean;
}
