import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'
import { Type } from 'class-transformer'
import { AddressJson, Bathroom } from '../entities/bathroom.entity'
import { ApiProperty } from '@nestjs/swagger'

export class CreateBathroomDto implements Bathroom {
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Unique identifier for the bathroom',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  id: string
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Name of the bathroom',
    example: 'Public Bathroom',
  })
  name: string
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Description of the bathroom',
    example: 'A clean and well-maintained public bathroom.',
    type: String,
  })
  description?: string | undefined
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'Latitude of the bathroom location',
    example: 40.712776,
  })
  latitude: number
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'Longitude of the bathroom location',
    example: -74.005974,
  })
  longitude: number
  @IsOptional()
  @Type(() => AddressJsonDto)
  @ApiProperty({
    description: 'Address of the bathroom',
    type: Object,
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
  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'City where the bathroom is located',
    example: 'New York',
    required: false,
  })
  city?: string | undefined
  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'State where the bathroom is located',
    example: 'NY',
    required: false,
  })
  state?: string | undefined
  @IsOptional()
  @IsNumber()
  @ApiProperty({
    description: 'Average rating of the bathroom',
    example: 4.5,
    required: false,
  })
  ratingPositive: number
  @IsOptional()
  @IsNumber()
  @ApiProperty({
    description: 'Average negative rating of the bathroom',
    example: 1.5,
    required: false,
  })
  ratingNegative: number
}

export class AddressJsonDto implements AddressJson {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Street address of the bathroom',
    example: '123 Main St',
  })
  street: string
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Postal code of the bathroom location',
    example: '10001',
  })
  number: string
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Neighborhood of the bathroom location',
    example: 'Chelsea',
    type: String,
  })
  neighborhood: string
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'City of the bathroom location',
    example: 'New York',
    type: String,
  })
  city: string
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'State of the bathroom location',
    example: 'NY',
    type: String,
  })
  state: string
}
