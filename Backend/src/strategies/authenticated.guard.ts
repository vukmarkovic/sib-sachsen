import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    console.log('------context------', context);

    const request = context.switchToHttp().getRequest();
    console.log('------guard------', request.isAuthenticated());
    return request.isAuthenticated();
  }
}
