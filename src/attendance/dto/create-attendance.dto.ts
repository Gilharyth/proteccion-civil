import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAttendanceDto {
    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsDate()
    @IsNotEmpty()
    checkInTime: Date;

    @IsDate()
    @IsOptional()
    checkOutTime?: Date;
}
