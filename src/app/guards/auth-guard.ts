import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';

import { TokenService } from '../services/http/token';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const tokenService = inject(TokenService);

  return tokenService.hasToken();
};
