import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SurveySchema } from 'src/schemas/survey.schema';
import { SurveyController } from 'src/controllers/survey/survey.controller';
import { SurveyService } from 'src/services/survey/survey.service';
import { UsersModule } from './users.module';
import { AuthModule } from './auth.module';
import { mongoConfig } from 'src/config/database';
import { FallbackMiddleware } from '../middlewares/fallback.middleware'
  
@Module({
  imports: [
    MongooseModule.forRoot(mongoConfig.host, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MongooseModule.forFeature([
      { name: mongoConfig.collection, schema: SurveySchema },
    ]),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController, SurveyController],
  providers: [AppService, SurveyService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // Use custom fallback middleware for non-API routes
    consumer.apply(FallbackMiddleware).forRoutes('*');
  }
}
