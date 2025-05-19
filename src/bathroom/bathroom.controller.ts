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

@Controller('bathroom')
export class BathroomController {
  constructor(private readonly bathroomService: BathroomService) {}

  @Post()
  create(@Body() createBathroomDto: CreateBathroomDto) {
    return this.bathroomService.create(createBathroomDto)
  }

  @Get()
  async findAll(@Query() searchBathRoomsDTO: SearchBathRoomsDto) {
    console.log('searchBathRoomsDTO', searchBathRoomsDTO)

    return this.bathroomService.findAll(searchBathRoomsDTO)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bathroomService.findOne(id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBathroomDto: UpdateBathroomDto,
  ) {
    return this.bathroomService.update(id, updateBathroomDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bathroomService.remove(id)
  }
}
