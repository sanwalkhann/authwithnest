/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from '@nestjs/swagger';

export enum Category {
    PERSONAL = "PERSONAL",
    HOME = "HOME",
    OFFICE = "OFFICE"
}

@Schema({
    timestamps: true,
})
export class Contact {
    @ApiProperty({ description: 'Contact name' })
    @Prop()
    name: string;

    @ApiProperty({ description: 'Contact number' })
    @Prop()
    number: number;

    @ApiProperty({ description: 'Contact category' })
    @Prop()
    category: Category;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
