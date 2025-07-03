import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { PersonnelModule } from 'src/personnel/personnel.module';

@Module({
  providers: [ReportsService],
  controllers: [ReportsController],
  imports: [PersonnelModule],
})
export class ReportsModule {}
