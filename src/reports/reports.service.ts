import { Injectable } from '@nestjs/common';
import { ManagerError } from 'src/common/errors/manager.error';
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
                throw new ManagerError({
                    type: "NOT_FOUND",
                    message: `Personnel with ID ${personnel} not found.`,
                });
            }

            return `http://localhost:3000/attendance/${personnelData.id}`;
        } catch (error) {
            ManagerError.createSignatureError(error.message)
        }
    }
}
