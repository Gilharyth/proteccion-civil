import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Attendance {
    @Prop({ required: true })
    userId: string;

    @Prop({ required: true })
    checkInTime: Date;

    @Prop({ required: false })
    checkOutTime?: Date;

    @Prop({ default: true })
    isActive: boolean;

    @Prop({ default: Date.now })
    createdAt: Date;

    @Prop({ default: Date.now })
    updatedAt: Date;
}


export const AttendanceSchema = SchemaFactory.createForClass(Attendance);