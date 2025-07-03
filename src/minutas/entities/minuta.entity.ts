import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Base } from "./../../common/config/base.entity";

@Schema()
export class Minuta extends Base {
    @Prop({ required: true })
    filename: string;
}

export const MinutaSchema = SchemaFactory.createForClass(Minuta);
