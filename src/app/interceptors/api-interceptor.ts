import { HttpInterceptorFn } from '@angular/common/http';


export const apiInterceptor: HttpInterceptorFn = (req, next) => {

  const apiKey = 'eUO3HWTCMJdOXrVXybVjCA==L3fmG0uYb8Bt1I28';
  const cloned = req.clone({
    headers: req.headers.set('X-Api-Key', apiKey)
  });
  return next(cloned);
};
