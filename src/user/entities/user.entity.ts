import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Base } from "./../../common/config/base.entity";
import { UserRole } from "src/common/enums/user-role.enum";

@Schema()
export class User extends Base {
    @Prop()
    name: string;
    
    @Prop()
    email: string;
    
    @Prop()
    password: string;

    @Prop({ type: [String], enum: UserRole, default: [UserRole.USER] })
    roles: UserRole[];
}

export const UserSchema = SchemaFactory.createForClass(User);