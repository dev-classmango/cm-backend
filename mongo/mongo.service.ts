import { Connection } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';

import { MG_DB_CONNECTION_SUCCESS } from 'src/constants';
import {
  MG_DB_CONNECTION_FAILED,
  MG_DB_CONNECTION_DISCONNECTED,
} from 'src/constants/errors';

@Injectable()
export class MongoService implements OnModuleInit {
  private readonly logger = new Logger(MongoService.name);

  constructor(@InjectConnection() private readonly connection: Connection) {}

  onModuleInit() {
    this.connection.on('error', (error) => {
      this.logger.error(`${MG_DB_CONNECTION_FAILED}: ${error.message}`);
    });

    this.connection.on('connected', () => {
      this.logger.log(MG_DB_CONNECTION_SUCCESS);
    });

    this.connection.on('disconnected', () => {
      this.logger.warn(MG_DB_CONNECTION_DISCONNECTED);
    });

    this.connection
      .getClient()
      .connect()
      .then(() => this.logger.log(MG_DB_CONNECTION_SUCCESS))
      .catch((err) =>
        this.logger.error(`${MG_DB_CONNECTION_FAILED}: ${err.message}`),
      );
  }
}
