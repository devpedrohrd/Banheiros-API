import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'
import { Type } from 'class-transformer'
import { AddressJson, Bathroom } from '../entities/bathroom.entity'

export class CreateBathroomDto implements Bathroom {
  @IsString()
  @IsOptional()
  id: string
  @IsString()
  @IsNotEmpty()
  name: string
  @IsString()
  @IsOptional()
  description?: string | undefined
  @IsNotEmpty()
  @IsNumber()
  latitude: number
  @IsNotEmpty()
  @IsNumber()
  longitude: number
  @IsOptional()
  @Type(() => AddressJsonDto)
  address?: AddressJsonDto | undefined
  @IsOptional()
  @IsString()
  city?: string | undefined
  @IsOptional()
  @IsString()
  state?: string | undefined
  @IsOptional()
  @IsNumber()
  ratingPositive: number
  @IsOptional()
  @IsNumber()
  ratingNegative: number
}

class AddressJsonDto implements AddressJson {
  @IsString()
  @IsNotEmpty()
  street: string
  @IsString()
  @IsNotEmpty()
  number: string
  @IsString()
  @IsNotEmpty()
  neighborhood: string
  @IsString()
  @IsNotEmpty()
  city: string
  @IsString()
  @IsNotEmpty()
  state: string
}
