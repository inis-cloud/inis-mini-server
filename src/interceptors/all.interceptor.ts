import { Injectable, NestInterceptor, ExecutionContext, CallHandler, RequestTimeoutException } from '@nestjs/common';
import { catchError, map, Observable, throwError, TimeoutError } from 'rxjs';

@Injectable()
export class AllInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    return next.handle().pipe(
      catchError((err) => {
        return throwError(() => new RequestTimeoutException(err));
      }),
      map((data) => ({
        code: response.statusCode,
        data,
        message: '成功',
      })),
    );
  }
}
