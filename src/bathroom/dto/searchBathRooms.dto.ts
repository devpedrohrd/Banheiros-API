import { PartialType } from '@nestjs/mapped-types'
import { CreateBathroomDto } from './create-bathroom.dto'
import { IsNumber, IsOptional } from 'class-validator'
import { Transform } from 'class-transformer'

export class SearchBathRoomsDto extends PartialType(CreateBathroomDto) {
  @IsNumber()
  @Transform(({ value }) => parseInt(value, 10))
  @IsOptional()
  page: number
  @IsNumber()
  @Transform(({ value }) => parseInt(value, 10))
  @IsOptional()
  limit: number
  @IsNumber()
  @Transform(({ value }) => parseInt(value, 10))
  @IsOptional()
  offset: number
}
