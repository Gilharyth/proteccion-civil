import { Prop } from "@nestjs/mongoose";

export class Base {
    @Prop({ default: Date.now })
    createdAt: Date;
    
    @Prop({ default: Date.now })
    updatedAt: Date;

    @Prop({ default: true })
    isActive: boolean; // e.g., true, false
}