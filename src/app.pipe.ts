import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

@Injectable()
export class RegisterPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const hash = bcrypt.hashSync(value.password, saltOrRounds);
    value.password = hash;
    return value;
  }
}
