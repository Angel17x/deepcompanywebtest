import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpInterceptorRequest implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqModificada = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'x-apikey-marketplace': environment.accessKey ?? ''
      }
    });

    return next.handle(reqModificada)
      .pipe(
        retry(1), // Reintenta la petición hasta 3 veces en caso de fallo
        catchError((error: HttpErrorResponse) => {
          // Manejar el error de la forma que prefieras
          console.error('Error ocurrido:', error);
          return throwError(error); // Lanzar error para que los suscriptores puedan manejarlo
        })
      );
  }
}