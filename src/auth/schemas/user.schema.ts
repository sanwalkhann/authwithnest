/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from '@nestjs/swagger';

@Schema({
    timestamps: true,
})
export class User {
    @ApiProperty({ description: 'User name' })
    @Prop()
    name: string;

    @ApiProperty({ description: 'User email (must be unique)' })
    @Prop({ unique: [true, 'Email already exists'] })
    email: string;

    @ApiProperty({ description: 'User password' })
    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
