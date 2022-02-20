import { PipeTransform, Injectable, ArgumentMetadata, ServiceUnavailableException } from '@nestjs/common';

@Injectable()
export class UserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value || !Object.keys(value).length) {
      throw new ServiceUnavailableException('failed to execute');
    }
    return value;
  }
}
