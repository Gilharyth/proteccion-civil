import { Schema } from "@nestjs/mongoose";

@Schema()
export class Attendance {
    userId: string;
    checkInTime: Date;
    checkOutTime?: Date;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
