import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SchemaProviders } from './providers';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature(SchemaProviders)
  ],
  controllers: [],
  providers: [],
  exports: [MongooseModule.forFeature(SchemaProviders)],
})
export class SharedModule {}
