import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { UserRole } from 'src/enum/indxe';

export class CreateMenuDto {
  @ApiProperty({ description: '不包含id为新增，包含id为更新/删除' })
  @IsNumber()
  readonly id?: number;

  @IsEnum(UserRole)
  readonly role?: UserRole;

  @IsString()
  readonly icon?: string;

  @IsNotEmpty()
  @IsString()
  readonly label: string;

  @ApiProperty({ description: '不能重复' })
  @IsNotEmpty()
  @IsString()
  readonly value: string;

  @IsString()
  readonly path: string;

  @IsBoolean()
  readonly disabled?: boolean;

  @IsArray()
  readonly children: CreateMenuDto[];
}
