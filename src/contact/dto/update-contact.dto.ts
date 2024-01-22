/* eslint-disable prettier/prettier */
import { Category } from '../../schemas/contact.schema';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateContactDto {
    @ApiProperty({ description: 'Updated contact name' })
    readonly name: string;

    @ApiProperty({ description: 'Updated contact number' })
    readonly number: number;

    @ApiProperty({ description: 'Updated contact category' })
    readonly category: Category;
}
