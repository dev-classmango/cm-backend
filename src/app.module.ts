import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { PrismaModule } from 'src/prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoModule } from 'src/mongo/mongo.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot('mongodb://localhost/classmango'),
    PrismaModule,
    MongoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
