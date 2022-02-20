import { Injectable, NestInterceptor, ExecutionContext, CallHandler, ServiceUnavailableException } from '@nestjs/common';
import { catchError, Observable, throwError, timeout } from 'rxjs';
import { TypeORMError } from 'typeorm';

@Injectable()
export class ServiceInterceptor<T> implements NestInterceptor<T> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response> {
    return next.handle().pipe(
      timeout(3000),
      catchError((err) => {
        const massage = err.sqlMessage || err;
        if (err instanceof TypeORMError || err instanceof TypeError) {
          return throwError(() => new ServiceUnavailableException(massage));
        }
        return throwError(() => err);
      }),
    );
  }
}
