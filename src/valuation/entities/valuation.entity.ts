import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({ timestamps: true })
export class Valuation {
  @Prop()
  id: string
  @Prop({ required: true })
  bathroomId: string
  @Prop({ required: true })
  description: string
  @Prop({ default: true })
  isPositive: boolean
}

export const ValuationSchema = SchemaFactory.createForClass(Valuation)
