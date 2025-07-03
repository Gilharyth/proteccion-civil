import { Controller, Get, Param, Post, Res } from '@nestjs/common';
import { docDefinition, fonts } from './template/qr.template';

import PdfPrinter from 'pdfmake';
let printer = new PdfPrinter(fonts);
import { Response } from 'express';
import { ReportsService } from './reports.service';


@Controller('reports')
export class ReportsController {

    constructor(
        private readonly reportsService: ReportsService,
    ) {}

    @Get(':id')
    async createQr(@Param('id') id: string, @Res() res: Response) {
        const attendanceUrl = await this.reportsService.createQr(id)
        if (!attendanceUrl) {
            return res.status(404).json({ message: 'Attendance URL not found' });
        }
        
        let pdfDoc = printer.createPdfKitDocument(docDefinition(attendanceUrl)); // Example userId
        res.setHeader('Content-Disposition', 'inline; filename=document.pdf');
        
        pdfDoc.pipe(res);
        pdfDoc.end();
    }
}
