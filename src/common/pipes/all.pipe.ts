import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class AllPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // if (!value) {
    //   throw new BadRequestException('parameter error');
    // }
    return value;
  }
}
