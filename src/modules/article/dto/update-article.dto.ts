import { PartialType } from '@nestjs/mapped-types';
import { CreateArticleDto } from '.';

export class UpdateArticleDto extends PartialType(CreateArticleDto) {}
