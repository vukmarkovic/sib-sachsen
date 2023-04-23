import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { CreateSurveyDto } from 'src/dtos/create-survey.dto';
import { SurveyService } from 'src/services/survey/survey.service';

@Controller('api/v2/survey')
export class SurveyController {

  constructor(private readonly surveyService: SurveyService) {}

  @Post()
  async createSurvey(
    @Res() response: any,
    @Body() createSurveyDto: CreateSurveyDto,
  ) {
    try {
      const newSurvey = await this.surveyService.createSurvey(
        createSurveyDto,
      );
      return response.status(HttpStatus.CREATED).json({
        message: 'Survey has been created successfully',
        newSurvey,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Survey not created!',
        error: 'Bad Request',
      });
    }
  }

  @Get()
  async getSurveys(@Res() response: any) {
    try {
      const surveyData = await this.surveyService.getAllSurveys();
      return response.status(HttpStatus.OK).json({
        message: 'All surveys data found successfully',
        surveyData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id')
  async getSurvey(@Res() response: any, @Param('id') surveyId: string) {
    try {
      const existingSurvey = await this.surveyService.getSurvey(surveyId);
      return response.status(HttpStatus.OK).json({
        message: 'Survey found successfully',
        existingSurvey,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteSurvey(@Res() response: any, @Param('id') surveyId: string) {
    try {
      const deletedSurvey = await this.surveyService.deleteSurvey(surveyId);
      return response.status(HttpStatus.OK).json({
        message: 'Survey deleted successfully',
        deletedSurvey,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
