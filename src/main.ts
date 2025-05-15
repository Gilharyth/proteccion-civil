import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger("Bootstrap")
  
  await app.listen(process.env.PORT ?? 3000);
  logger.log(`Appplication running on port ${process.env.PORT}`);
  logger.log(`Appplication running on mode ${process.env.NODE_ENV}`);
  logger.log(`Appplication running on url ${ await app.getUrl() }`);
}
bootstrap();
