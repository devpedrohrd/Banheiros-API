import { CreateBathroomDto } from './create-bathroom.dto'
import { IsNumber, IsOptional } from 'class-validator'
import { Transform } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'

export class SearchBathRoomsDto extends CreateBathroomDto {
  @IsNumber()
  @Transform(({ value }) => parseInt(value, 10))
  @IsOptional()
  @ApiProperty({
    description: 'Page number for pagination',
    example: 1,
    required: false,
  })
  page: number
  @IsNumber()
  @Transform(({ value }) => parseInt(value, 10))
  @IsOptional()
  @ApiProperty({
    description: 'Number of items per page for pagination',
    example: 10,
    required: false,
  })
  limit: number
  @IsNumber()
  @Transform(({ value }) => parseInt(value, 10))
  @IsOptional()
  @ApiProperty({
    description: 'Offset for pagination',
    example: 0,
    required: false,
  })
  offset: number
}
