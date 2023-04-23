import { Document } from 'mongoose';

export interface ISurvey extends Document {
  readonly data: Object;
  readonly time: string;
}
