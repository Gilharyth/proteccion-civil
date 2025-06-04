import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async create(createUserDto: CreateUserDto) {
    try {
      const createdUser = new this.userModel(createUserDto);
      if( !createdUser ){
        throw new ConflictException('User already exists');
      }

      await createdUser.save();  

      return createdUser;
    } catch (error) {
      throw new InternalServerErrorException('Failed to create user', error.message);
    }
  }

  async findAll() {
    try {
      return this.userModel.find().exec();
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve users', error.message);
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.userModel.findById(id).exec();
      if (!user) {
        throw new ConflictException('User not found');
      }

      return user;
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve user', error.message);
    }
  }

  async findOneByEmail(email: string) {
    try {
      const user = await this.userModel.findOne({ email }).exec();
      if (!user) {
        throw new ConflictException('User not found');
      }

      return user;
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve user', error.message);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
      if (!updatedUser) {
        throw new ConflictException('User not found or update failed');
      }
      return updatedUser;
    } catch (error) {
      throw new InternalServerErrorException('Failed to update user', error.message);
    }
  }

  async remove(id: string) {
    try {
      const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
      if (!deletedUser) {
        throw new ConflictException('User not found or delete failed');
      }
      
      return deletedUser;
    } catch (error) {
      throw new InternalServerErrorException('Failed to remove user', error.message);
    }
  }
}
