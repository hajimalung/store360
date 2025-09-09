import { HttpInterceptorFn } from '@angular/common/http';

export const corsInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedReq = req.clone({
    headers: req.headers
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
      .set('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization')
  });

  return next(modifiedReq);
};
