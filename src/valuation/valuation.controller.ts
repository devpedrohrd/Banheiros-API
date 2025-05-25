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
import { ApiResponse, ApiTags } from '@nestjs/swagger'

@Controller('valuation')
@ApiTags('valuation')
export class ValuationController {
  constructor(private readonly valuationService: ValuationService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The valuation has been successfully created.',
    type: CreateValuationDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. The input data is invalid.',
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found. The specified bathroom does not exist.',
  })
  @ApiResponse({
    status: 409,
    description: 'Conflict. A valuation with the same ID already exists.',
  })
  async create(@Body() createValuationDto: CreateValuationDto) {
    return this.valuationService.create(createValuationDto)
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Returns a list of valuations.',
    type: [CreateValuationDto],
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. The search parameters are invalid.',
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found. No valuations match the search criteria.',
  })
  async findAll() {
    return this.valuationService.findAll()
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Returns the valuation with the specified ID.',
    type: CreateValuationDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found. The valuation with the specified ID does not exist.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. The ID format is invalid.',
  })
  async findOne(@Param('id') id: string) {
    return this.valuationService.findOne(id)
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'The valuation has been successfully updated.',
    type: UpdateValuationDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. The input data is invalid.',
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found. The valuation with the specified ID does not exist.',
  })
  async update(
    @Param('id') id: string,
    @Body() updateValuationDto: UpdateValuationDto,
  ) {
    return this.valuationService.update(id, updateValuationDto)
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'The valuation has been successfully deleted.',
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found. The valuation with the specified ID does not exist.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. The ID format is invalid.',
  })
  async remove(@Param('id') id: string) {
    return this.valuationService.remove(id)
  }
}
