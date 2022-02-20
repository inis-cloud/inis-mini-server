import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { map, Observable, timeout } from 'rxjs';

export interface Response<T> {
  data: T;
}

@Injectable()
export class AllInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    const [ServerResponse] = context.getArgs();
    const httpMessage = ServerResponse.socket._httpMessage;
    return next.handle().pipe(
      timeout(3000),
      map((data) => ({
        code: httpMessage.statusCode,
        data,
        message: '成功',
      })),
    );
  }
}
