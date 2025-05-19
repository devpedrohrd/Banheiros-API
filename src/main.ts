import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { config } from 'dotenv'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  config()
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      skipUndefinedProperties: false,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  )

  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
