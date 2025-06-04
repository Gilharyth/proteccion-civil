import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { StatusPersonnel } from "./../../common/enums/status-personnel.enum";
import { Base } from "./../../common/config/base.entity";

@Schema()
export class Personnel extends Base {
    @Prop({ required: true })
    name: string;
    
    @Prop({ required: true })
    surname: string;
    
    @Prop({ required: true, unique: true })
    dni: string;

    @Prop({ required: true, unique: true })
    email: string;
    
    @Prop({ required: true, unique: true })
    phone: string;

    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    city: string;

    @Prop({ required: true })
    state: string;

    @Prop({ required: true })
    country: string;

    @Prop({ required: true })
    postalCode: string;
    
    @Prop({ required: true })
    dateOfBirth: Date;

    @Prop({ required: true })
    position: string;

    @Prop({ required: true })
    department: string;

    @Prop({ default: StatusPersonnel.ACTIVE })
    status: StatusPersonnel;
}

export const PersonnelSchema = SchemaFactory.createForClass(Personnel);