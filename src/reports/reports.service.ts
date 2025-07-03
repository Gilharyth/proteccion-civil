import { Injectable } from '@nestjs/common';
import { PersonnelService } from 'src/personnel/personnel.service';

@Injectable()
export class ReportsService {
    constructor(
        private readonly personnelService: PersonnelService, 
    ) {}

    async createQr(personnel: string){
        try {
            const personnelData = await this.personnelService.findOne(personnel);

            if (!personnelData) {
                throw new Error('Personnel not found');
            }

            return `http://localhost:3000/attendance/${personnelData.id}`;
        } catch (error) {
            throw new Error(`Error creating QR code: ${error.message}`);
        }
    }
}
