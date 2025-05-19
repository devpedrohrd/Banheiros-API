import { ConflictException, Injectable } from '@nestjs/common'
import { CreateValuationDto } from './dto/create-valuation.dto'
import { UpdateValuationDto } from './dto/update-valuation.dto'
import { ValuationRepository } from './valuation.repository'
import { BathroomService } from 'src/bathroom/bathroom.service'

@Injectable()
export class ValuationService {
  constructor(
    private readonly valuationRepository: ValuationRepository,
    private readonly bathroomService: BathroomService,
  ) {}

  async create(createValuationDto: CreateValuationDto) {
    await this.bathroomService.findOne(createValuationDto.bathroomId)

    return await this.valuationRepository.create(createValuationDto)
  }

  async findAll() {
    return await this.valuationRepository.findAll()
  }

  async findOne(id: string) {
    return await this.valuationRepository.findOne(id)
  }

  async update(id: string, updateValuationDto: UpdateValuationDto) {
    return await this.valuationRepository.update(id, updateValuationDto)
  }

  async remove(id: string) {
    return await this.valuationRepository.remove(id)
  }
}
