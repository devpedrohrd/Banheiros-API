import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, mongo } from 'mongoose'
import { Bathroom } from './entities/bathroom.entity'
import { CreateBathroomDto } from './dto/create-bathroom.dto'
import { SearchBathRoomsDto } from './dto/searchBathRooms.dto'
import { UpdateBathroomDto } from './dto/update-bathroom.dto'

@Injectable()
export class BathroomRepository {
  constructor(
    @InjectModel('Bathroom') private readonly bathroomModel: Model<Bathroom>,
  ) {}

  async createBathroom(bathroom: CreateBathroomDto) {
    const bathroomExists = await this.bathroomModel.findOne({
      latitude: bathroom.latitude,
      longitude: bathroom.longitude,
    })

    if (bathroomExists) {
      throw new ConflictException('Bathroom already exists')
    }

    const newBathroom = new this.bathroomModel({
      ...bathroom,
    })

    return newBathroom.save()
  }

  async findAllBathrooms(searBathroomsDTO: SearchBathRoomsDto) {
    const { page, limit, offset, ...rest } = searBathroomsDTO
    const bathrooms = await this.bathroomModel
      .find({
        ...rest,
      })
      .skip(searBathroomsDTO.offset ? Number(offset) : 0)
      .limit(searBathroomsDTO.limit ? Number(limit) : 10)
      .exec()

    return [bathrooms, bathrooms.length]
  }

  async findBathRoomById(id: string) {
    if (!mongo.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid ID format')
    }

    return await this.bathroomModel.findById(id).exec()
  }

  async updateBathroom(id: string, bathroom: UpdateBathroomDto) {
    if (!mongo.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid ID format')
    }

    const updatedBathroom = await this.bathroomModel
      .findByIdAndUpdate(id, bathroom, { new: true })
      .exec()

    if (!updatedBathroom) {
      throw new BadRequestException('Bathroom not found')
    }

    return updatedBathroom
  }

  async deleteBathroom(id: string) {
    if (!mongo.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid ID format')
    }

    const deletedBathroom = await this.bathroomModel
      .findByIdAndDelete(id)
      .exec()

    if (!deletedBathroom) {
      throw new BadRequestException('Bathroom not found')
    }

    return deletedBathroom
  }
}
