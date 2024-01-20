/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LogInDto {
  @IsNotEmpty({ message: 'Please enter your email' })
  @IsString()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;
}
