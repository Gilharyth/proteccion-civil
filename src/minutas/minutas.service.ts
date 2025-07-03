import { Injectable } from '@nestjs/common';
import { ManagerError } from 'src/common/errors/manager.error';
import fs from 'fs';
import { v4 } from 'uuid';
import { InjectModel } from '@nestjs/mongoose';
import { Minuta } from './entities/minuta.entity';
import { Model } from 'mongoose';
import path from 'path';

@Injectable()
export class MinutasService {

  constructor(
    @InjectModel(Minuta.name) private readonly minutaModel: Model<Minuta>,
  ) { }

  existFolderPath(path: string) {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
  }

  async create(file: Express.Multer.File) {
    try {
      const extension = file.originalname.split('.').at(-1);
      const fileName = `${v4()}.${extension}`;

      const pathFolder = path.resolve(__dirname + './../../uploads/minutas', fileName);
      this.existFolderPath(__dirname + './../../uploads/minutas');
      fs.writeFileSync(pathFolder, file.buffer);

      const minuta = new this.minutaModel({ filename: fileName });

      await minuta.save();

      return {
        message: 'File uploaded successfully',
        fileName,
        pathFolder,
      };
    } catch (error) {
      ManagerError.createSignatureError(error.message)
    }
  }

  findAll() {
    return `This action returns all minutas`;
  }

  async findOne(id: string) {
    try {
      const minuta = await this.minutaModel.findById(id);

      if (!minuta) {
        throw new ManagerError({ type: 'NOT_FOUND', message: 'Minuta not found' });
      }

      const pathFolder = path.resolve(__dirname + './../../uploads/minutas', minuta.filename);
      
      console.log(pathFolder);

      if (!fs.existsSync(pathFolder)) {
        throw new ManagerError({ type: 'NOT_FOUND', message: 'File not found' });
      }

      return {
        message: 'Minuta found successfully',
        minuta,
        pathFolder,
      }
    } catch (error) {
      ManagerError.createSignatureError(error.message);
    }
  }
}
