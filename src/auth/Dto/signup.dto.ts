/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto {
  @ApiProperty({ description: 'User name' })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'User email' })
  @IsNotEmpty({ message: 'Please enter your email' })
  @IsString()
  readonly email: string;

  @ApiProperty({ description: 'User password (at least 6 characters long)' })
  @IsNotEmpty()
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  readonly password: string;
}
