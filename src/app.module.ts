import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { BathroomModule } from './bathroom/bathroom.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { ValuationModule } from './valuation/valuation.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URL'),
        connectionFactory: (connection) => {
          connection.on('error', (err: Error) => {
            console.error('MongoDB Connection Error:', err)
          })
          return connection
        },
      }),
    }),
    BathroomModule,
    ValuationModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
