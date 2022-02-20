import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, tap, timeout } from 'rxjs';

export interface Response<T> {
  data: T;
}

@Injectable()
export class AllInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(
      timeout(3000),
      tap((data) => ({
        code: 200,
        data,
        message: '成功',
      })),
    );
  }
}
