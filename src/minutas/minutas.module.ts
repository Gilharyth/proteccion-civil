import { Module } from '@nestjs/common';
import { MinutasService } from './minutas.service';
import { MinutasController } from './minutas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Minuta, MinutaSchema } from './entities/minuta.entity';

@Module({
  controllers: [MinutasController],
  providers: [MinutasService],
  imports: [MongooseModule.forFeature([{ name: Minuta.name, schema: MinutaSchema }])],
})
export class MinutasModule {}
