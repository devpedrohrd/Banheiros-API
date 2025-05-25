import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { Valuation } from '../entities/valuation.entity'
import { ApiProperty } from '@nestjs/swagger'

export class CreateValuationDto implements Valuation {
  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Unique identifier for the valuation',
    example: '123e4567-e89b-12d3-a456-426614174000',
    required: false,
  })
  id: string
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'ID of the bathroom being valued',
    example: '123e4567-e89b-12d3-a456-426614174001',
    type: String,
  })
  bathroomId: string
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'ID of the user who created the valuation',
    example: 'description example',
    type: String,
  })
  description: string
  @IsOptional()
  @IsBoolean()
  @ApiProperty({
    description: 'Indicates if the valuation is positive',
    example: true,
    required: false,
    type: Boolean,
  })
  isPositive: boolean
}
