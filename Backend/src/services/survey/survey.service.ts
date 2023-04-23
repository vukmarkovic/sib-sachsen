import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateSurveyDto } from 'src/dtos/create-survey.dto';
import { ISurvey } from 'src/interfaces/survey.interface';
import { Model } from 'mongoose';

@Injectable()
export class SurveyService {

  constructor(@InjectModel('Survey') private surveyModel: Model<ISurvey>) {}

  async createSurvey(createSurveyDto: CreateSurveyDto): Promise<ISurvey> {
    const newSurvey = new this.surveyModel(createSurveyDto);
    return newSurvey.save();
  }

  async getAllSurveys(): Promise<ISurvey[]> {
    const surveyData = await this.surveyModel.find();
    if (!surveyData || surveyData.length == 0) {
      throw new NotFoundException('Surveys data not found!');
    }
    return surveyData;
  }

  async getSurvey(surveyId: string): Promise<ISurvey> {
    const existingSurvey = await this.surveyModel.findById(surveyId).exec();
    if (!existingSurvey) {
      throw new NotFoundException(`Survey #${surveyId} not found`);
    }
    return existingSurvey;
  }

  async deleteSurvey(surveyId: string): Promise<ISurvey> {
    const deletedSurvey = await this.surveyModel.findByIdAndDelete(surveyId);
    if (!deletedSurvey) {
      throw new NotFoundException(`Survey #${surveyId} not found`);
    }
    return deletedSurvey;
  }
}
