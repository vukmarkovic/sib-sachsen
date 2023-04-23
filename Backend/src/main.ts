import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import * as serveStatic from 'serve-static';
import { PORT } from './config/config';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const logger: Logger = new Logger('main.ts');

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  // Serve static frontend files
  app.use(serveStatic(join(__dirname, '..', '..', 'Frontend', 'build')));

  await app.listen(PORT || 3000, () => {
    logger.log(`Service has been started at ${PORT} port`);
  });
}
bootstrap();
