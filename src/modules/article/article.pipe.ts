import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ArticlePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value || !Object.keys(value).length) {
      throw new BadRequestException('parameter exception');
    }
    return value;
  }
}
