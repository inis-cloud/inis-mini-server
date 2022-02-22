import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
@Injectable()
export class PassWordPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (value.password) {
      const hash = bcrypt.hashSync(value.password, 10);
      value.password = hash;
    }
    return value;
  }
}
