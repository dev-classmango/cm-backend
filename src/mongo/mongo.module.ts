import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(process.env.MG_DATABASE_URL)],
  controllers: [],
  providers: [],
})
export class MongoModule {}
