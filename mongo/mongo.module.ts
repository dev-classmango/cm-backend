import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoService } from './mongo.service';

@Module({
  imports: [MongooseModule.forRoot(process.env.MG_DATABASE_URL)],
  providers: [MongoService],
})
export class MongoModule {}
