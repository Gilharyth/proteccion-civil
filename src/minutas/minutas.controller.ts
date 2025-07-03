import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { MinutasService } from './minutas.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';

@Controller('minutas')
export class MinutasController {
  constructor(private readonly minutasService: MinutasService) { }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    this.minutasService.create(file);
  }

  @Get()
  findAll() {
    return this.minutasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const minuta = await this.minutasService.findOne(id);
    if (!minuta?.pathFolder) {
      return res.status(404).send('Minuta not found');
    }
    res.setHeader('Content-Disposition', 'inline; filename=document.pdf');

    res.sendFile(minuta.pathFolder, (err) => {
      if (err) {
        res.status(404).send('File not found');
      }
    });
  }
}

