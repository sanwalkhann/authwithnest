/* eslint-disable prettier/prettier */
import { Category } from '../../schemas/contact.schema';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDto {
    @ApiProperty({ description: 'Contact name' })
    readonly name: string;

    @ApiProperty({ description: 'Contact number' })
    readonly number: number;

    @ApiProperty({ description: 'Contact category' })
    readonly category: Category;
}
