import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePersonnelDto } from './dto/create-personnel.dto';
import { UpdatePersonnelDto } from './dto/update-personnel.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Personnel } from './entities/personnel.entity';
import { Model } from 'mongoose';

@Injectable()
export class PersonnelService {
  constructor(@InjectModel(Personnel.name) private personnelModel: Model<Personnel>) { }

  async create(createPersonnelDto: CreatePersonnelDto) {
    try {
      const personnel = await this.personnelModel.create({ ...createPersonnelDto, isActive: true });
      if (!personnel) {
        throw new ConflictException('Personnel not created');
      }

      return personnel;
    } catch (error) {
      throw new InternalServerErrorException('Error creating personnel');
    }
  }

  async findAll() {
    try {
      return this.personnelModel.find().exec()
    } catch (error) {
      throw new InternalServerErrorException('Error finding personnel');
    }
  }

  async findOne(id: string) {
    try {
      return this.personnelModel.findById(id).exec()
    } catch (error) {
      throw new InternalServerErrorException('Error finding personnel');
    }
  }

  async update(id: string, updatePersonnelDto: UpdatePersonnelDto) {
    try {
      return this.personnelModel.findByIdAndUpdate(id, updatePersonnelDto, { new: true }).exec()
    } catch (error) {
      throw new InternalServerErrorException('Error updating personnel');
    }
  }

  async remove(id: string) {
    try {
      return this.personnelModel.findByIdAndDelete(id).exec()
    } catch (error) {
      throw new InternalServerErrorException('Error deleting personnel');
    }
  }
}
