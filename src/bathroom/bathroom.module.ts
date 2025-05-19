import { Module } from '@nestjs/common'
import { BathroomService } from './bathroom.service'
import { BathroomController } from './bathroom.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { BathroomSchema } from './entities/bathroom.entity'
import { BathroomRepository } from './bathroom.repository'

@Module({
  controllers: [BathroomController],
  providers: [BathroomService, BathroomRepository],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Bathroom',
        schema: BathroomSchema,
      },
    ]),
  ],
  exports: [BathroomService],
})
export class BathroomModule {}
