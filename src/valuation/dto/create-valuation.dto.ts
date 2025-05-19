import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { Valuation } from '../entities/valuation.entity'

export class CreateValuationDto implements Valuation {
  @IsOptional()
  @IsString()
  id: string
  @IsString()
  @IsNotEmpty()
  bathroomId: string
  @IsString()
  @IsNotEmpty()
  description: string
  @IsOptional()
  @IsBoolean()
  isPositive: boolean
}
