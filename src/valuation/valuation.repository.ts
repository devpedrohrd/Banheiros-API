import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, mongo } from 'mongoose'
import { Valuation } from './entities/valuation.entity'
import { UpdateValuationDto } from './dto/update-valuation.dto'

@Injectable()
export class ValuationRepository {
  constructor(
    @InjectModel('Valuation') private readonly valuationModel: Model<Valuation>,
  ) {}

  async create(createValuationDto: Valuation): Promise<Valuation> {
    const createdValuation = new this.valuationModel(createValuationDto)
    return createdValuation.save()
  }

  async findAll(): Promise<[Valuation[], number]> {
    const valuation = await this.valuationModel.find().exec()

    return [valuation, valuation.length]
  }

  async findOne(id: string): Promise<Valuation | null> {
    if (!mongo.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid ID format')
    }

    const valuationExists = await this.valuationModel.findById(id).exec()

    if (!valuationExists) {
      throw new BadRequestException('Valuation not found')
    }

    return valuationExists
  }

  async update(
    id: string,
    updateValuationDto: UpdateValuationDto,
  ): Promise<Valuation | null> {
    if (!mongo.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid ID format')
    }

    await this.findOne(id)

    return this.valuationModel
      .findByIdAndUpdate(id, updateValuationDto, { new: true })
      .exec()
      .catch((error) => {
        throw new BadRequestException('Error updating valuation', error)
      })
  }

  async remove(id: string): Promise<Valuation | null> {
    if (!mongo.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid ID format')
    }

    await this.findOne(id)

    return this.valuationModel
      .findByIdAndDelete(id)
      .exec()
      .catch((error) => {
        throw new BadRequestException('Error deleting valuation', error)
      })
  }
}
