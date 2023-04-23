import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Survey {
  @Prop({ type: Object })
  data: any;

  @Prop()
  time: string;
}

export const SurveySchema = SchemaFactory.createForClass(Survey);
