import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common'
import { BathroomService } from './bathroom.service'
import { CreateBathroomDto } from './dto/create-bathroom.dto'
import { UpdateBathroomDto } from './dto/update-bathroom.dto'
import { SearchBathRoomsDto } from './dto/searchBathRooms.dto'
import { ApiResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('bathroom')
@Controller('bathrooms')
export class BathroomController {
  constructor(private readonly bathroomService: BathroomService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The bathroom has been successfully created.',
    type: CreateBathroomDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. The input data is invalid.',
  })
  @ApiResponse({
    status: 409,
    description: 'Conflict. A bathroom with the same location already exists.',
  })
  async create(@Body() createBathroomDto: CreateBathroomDto) {
    return this.bathroomService.create(createBathroomDto)
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Returns a list of bathrooms.',
    type: [SearchBathRoomsDto],
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. The search parameters are invalid.',
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found. No bathrooms match the search criteria.',
  })
  async findAll(@Query() searchBathRoomsDTO: SearchBathRoomsDto) {
    console.log('searchBathRoomsDTO', searchBathRoomsDTO)

    return this.bathroomService.findAll(searchBathRoomsDTO)
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Returns the bathroom with the specified ID.',
    type: CreateBathroomDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. The ID format is invalid.',
  })
  @ApiResponse({
    status: 404,
    description:
      'Not Found. The bathroom with the specified ID does not exist.',
  })
  async findOne(@Param('id') id: string) {
    return this.bathroomService.findOne(id)
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'The bathroom has been successfully updated.',
    type: UpdateBathroomDto,
  })
  @ApiResponse({
    status: 400,
    description:
      'Bad Request. The ID format is invalid or the input data is invalid.',
  })
  @ApiResponse({
    status: 404,
    description:
      'Not Found. The bathroom with the specified ID does not exist.',
  })
  async update(
    @Param('id') id: string,
    @Body() updateBathroomDto: UpdateBathroomDto,
  ) {
    return this.bathroomService.update(id, updateBathroomDto)
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'The bathroom has been successfully deleted.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. The ID format is invalid.',
  })
  @ApiResponse({
    status: 404,
    description:
      'Not Found. The bathroom with the specified ID does not exist.',
  })
  async remove(@Param('id') id: string) {
    return this.bathroomService.remove(id)
  }

  @Get('refresh')
  async refreshApi() {
    return await this.bathroomService.refreshApi()
  }
}
