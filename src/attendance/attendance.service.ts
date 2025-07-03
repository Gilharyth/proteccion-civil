import { Injectable } from '@nestjs/common';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { PersonnelService } from 'src/personnel/personnel.service';
import { InjectModel } from '@nestjs/mongoose';
import { Attendance } from './entities/attendance.entity';
import { Model } from 'mongoose';

@Injectable()
export class AttendanceService {

  constructor(
    private readonly personnelService: PersonnelService,
    @InjectModel(Attendance.name) private attendanceModel: Model<Attendance>
  ) { }

  async create(createAttendanceDto: CreateAttendanceDto) {
    try {
      const attendance = await this.attendanceModel.create(createAttendanceDto);
      if (!attendance) {
        throw new Error('Attendance already exists');
      }

      await attendance.save();
      
      return attendance;
    } catch (error) {
      throw new Error(`Failed to create attendance: ${error.message}`);
    }
  }

  findAll() {
    return `This action returns all attendance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attendance`;
  }

  async findOnePersonnel(id: string) {
    try {
      const personnel =  await this.personnelService.findOne(id);

      if (!personnel) {
        throw new Error('Personnel not found');
      }

      const createAttedance = await this.create({
        userId: personnel.id,
        checkInTime: new Date(),
      })

      return createAttedance;
    } catch (error) {
      throw new Error(`Failed to find personnel attendance: ${error.message}`);
    }
  }

  update(id: number, updateAttendanceDto: UpdateAttendanceDto) {
    return `This action updates a #${id} attendance`;
  }

  remove(id: number) {
    return `This action removes a #${id} attendance`;
  }
}
