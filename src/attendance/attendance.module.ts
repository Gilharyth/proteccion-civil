import { Module } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { AttendanceController } from './attendance.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Attendance, AttendanceSchema } from './entities/attendance.entity';
import { PersonnelModule } from 'src/personnel/personnel.module';

@Module({
  controllers: [AttendanceController],
  providers: [AttendanceService],
  imports: [MongooseModule.forFeature([{ name: Attendance.name, schema: AttendanceSchema }]), PersonnelModule],
  exports: [AttendanceService],
})
export class AttendanceModule { }
