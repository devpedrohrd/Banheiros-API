import { AddressJsonDto, CreateBathroomDto } from './create-bathroom.dto'
import { IsNumber, IsOptional, IsString } from 'class-validator'
import { Transform, Type } from 'class-transformer'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class SearchBathRoomsDto implements CreateBathroomDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Unique identifier for the bathroom',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  id: string
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Name of the bathroom',
    example: 'Public Bathroom',
  })
  name: string
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Description of the bathroom',
    example: 'A clean and well-maintained public bathroom.',
    type: String,
  })
  description?: string | undefined
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  @ApiPropertyOptional({
    description: 'Latitude of the bathroom location',
    example: 40.712776,
  })
  latitude: number
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  @ApiPropertyOptional({
    description: 'Longitude of the bathroom location',
    example: -74.005974,
  })
  longitude: number
  @IsOptional()
  @Type(() => AddressJsonDto)
  @ApiPropertyOptional({
    description: 'Address of the bathroom',
    type: AddressJsonDto,
    required: false,
    example: {
      street: '123 Main St',
      number: '10001',
      neighborhood: 'Chelsea',
      city: 'New York',
      state: 'NY',
    },
  })
  address?: AddressJsonDto | undefined
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Name of the city where the bathroom is located',
    example: 'New York',
    type: String,
  })
  city?: string | undefined
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Name of the state where the bathroom is located',
    example: 'NY',
    type: String,
  })
  state?: string | undefined
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Rating of the bathroom (positive)',
    example: 4.5,
  })
  ratingPositive: number
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Rating of the bathroom (negative)',
    example: 1.5,
  })
  ratingNegative: number
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsNumber()
  @ApiPropertyOptional({
    description: 'Page number for pagination',
    example: 1,
  })
  page?: number
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsNumber()
  @ApiPropertyOptional({
    description: 'Number of items per page for pagination',
    example: 10,
  })
  limit?: number
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsNumber()
  @ApiPropertyOptional({
    description: 'Offset for pagination',
    example: 0,
  })
  offset?: number
}
