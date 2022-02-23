import { IsArray, IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UpsertMenuDto {
  @IsString()
  readonly role?: string;

  @IsString()
  readonly icon?: string;

  @IsNotEmpty()
  @IsString()
  readonly label: string;

  @IsBoolean()
  readonly disabled?: string | null;

  @IsArray()
  readonly children?: UpsertMenuDto[];
}
