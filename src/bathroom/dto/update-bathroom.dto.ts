import { PartialType } from '@nestjs/mapped-types'
import { CreateBathroomDto } from './create-bathroom.dto'

export class UpdateBathroomDto extends PartialType(CreateBathroomDto) {}
