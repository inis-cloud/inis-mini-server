import { Injectable, NestInterceptor, ExecutionContext, CallHandler, NotFoundException } from '@nestjs/common';
import { catchError, Observable, throwError, timeout } from 'rxjs';
import { MustBeEntityError, QueryFailedError } from 'typeorm';

@Injectable()
export class ServiceInterceptor<T> implements NestInterceptor<T> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response> {
    return next.handle().pipe(
      timeout(3000),
      catchError((err) => {
        if (err instanceof QueryFailedError || err instanceof MustBeEntityError) {
          return throwError(() => new NotFoundException());
        }
        return throwError(() => err);
      }),
    );
  }
}
