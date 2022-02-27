import { IsArray, IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateMenuDto {
  @IsString()
  readonly role?: string;

  @IsString()
  readonly icon?: string;

  @IsNotEmpty()
  @IsString()
  readonly label: string;

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
