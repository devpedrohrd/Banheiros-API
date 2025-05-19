import { Module } from '@nestjs/common'
import { ValuationService } from './valuation.service'
import { ValuationController } from './valuation.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { ValuationSchema } from './entities/valuation.entity'
import { ValuationRepository } from './valuation.repository'
import { BathroomModule } from 'src/bathroom/bathroom.module'

@Module({
  controllers: [ValuationController],
  providers: [ValuationService, ValuationRepository],
  imports: [
    MongooseModule.forFeature([{ name: 'Valuation', schema: ValuationSchema }]),
    BathroomModule,
  ],
})
export class ValuationModule {}
