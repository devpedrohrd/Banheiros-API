import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'

export type BathroomDocument = Bathroom & Document

export type AddressJson = {
  street: string
  number: string
  neighborhood: string
  city: string
  state: string
}

@Schema({
  timestamps: true, // Habilita createdAt e updatedAt automaticamente
})
export class Bathroom {
  @Prop()
  id: string

  @Prop({ required: true })
  name: string

  @Prop()
  description?: string // Opcional

  @Prop({ required: true })
  latitude: number

  @Prop({ required: true })
  longitude: number

  @Prop({ type: Object })
  address?: AddressJson

  @Prop()
  city?: string // Opcional

  @Prop()
  state?: string // Opcional

  @Prop({ default: 0 })
  ratingPositive: number

  @Prop({ default: 0 })
  ratingNegative: number
}

export const BathroomSchema = SchemaFactory.createForClass(Bathroom)
