import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { join } from 'path';

@Injectable()
export class FallbackMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const indexPath = join(__dirname, '..', '..', '..', 'Frontend', 'build', 'index.html');

    // console.log(`FallbackMiddleware: ${req.originalUrl}`)
    
    if (!req.originalUrl.startsWith('/api')) {
      // Serve index.html for non-API routes
      res.sendFile(indexPath);
    } else {
      // Call the next middleware or controller
      next();
    }
  }
}
