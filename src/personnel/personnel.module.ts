import { Module } from '@nestjs/common';
import { PersonnelService } from './personnel.service';
import { PersonnelController } from './personnel.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Personnel, PersonnelSchema } from './entities/personnel.entity';

@Module({
  controllers: [PersonnelController],
  providers: [PersonnelService],
  imports: [MongooseModule.forFeature([{ name: Personnel.name, schema: PersonnelSchema }])]
})
export class PersonnelModule {}
