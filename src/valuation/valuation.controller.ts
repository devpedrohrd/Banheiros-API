import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { ValuationService } from './valuation.service'
import { CreateValuationDto } from './dto/create-valuation.dto'
import { UpdateValuationDto } from './dto/update-valuation.dto'

@Controller('valuation')
export class ValuationController {
  constructor(private readonly valuationService: ValuationService) {}

  @Post()
  async create(@Body() createValuationDto: CreateValuationDto) {
    return this.valuationService.create(createValuationDto)
  }

  @Get()
  async findAll() {
    return this.valuationService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.valuationService.findOne(id)
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateValuationDto: UpdateValuationDto,
  ) {
    return this.valuationService.update(id, updateValuationDto)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.valuationService.remove(id)
  }
}
