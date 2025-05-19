import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { CreateBathroomDto } from './dto/create-bathroom.dto'
import { UpdateBathroomDto } from './dto/update-bathroom.dto'
import { BathroomRepository } from './bathroom.repository'
import { SearchBathRoomsDto } from './dto/searchBathRooms.dto'

@Injectable()
export class BathroomService {
  constructor(private readonly bathroomRepository: BathroomRepository) {}

  async create(createBathroomDto: CreateBathroomDto) {
    return this.bathroomRepository.createBathroom(createBathroomDto)
  }

  async findAll(searBathroomsDTO: SearchBathRoomsDto) {
    return this.bathroomRepository
      .findAllBathrooms(searBathroomsDTO)
      .catch((error) => {
        console.error('Error fetching bathrooms:', error)
        throw new BadRequestException('Error fetching bathrooms')
      })
  }

  async findOne(id: string) {
    const bathroom = await this.bathroomRepository.findBathRoomById(id)

    if (!bathroom) {
      throw new NotFoundException('Bathroom not found')
    }

    return bathroom
  }

  async update(id: string, updateBathroomDto: UpdateBathroomDto) {
    return this.bathroomRepository
      .updateBathroom(id, updateBathroomDto)
      .catch((error) => {
        if (error instanceof BadRequestException) {
          throw new BadRequestException('Invalid ID format')
        }
        console.error('Error updating bathroom:', error)
        throw new BadRequestException('Error updating bathroom')
      })
  }

  async remove(id: string) {
    return this.bathroomRepository.deleteBathroom(id)
  }
}
