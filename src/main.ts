import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { config } from 'dotenv'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

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

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Bathroom API')
    .setVersion('1.0')
    .build()
  const documentFactory = () => SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('/', app, documentFactory)

  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
