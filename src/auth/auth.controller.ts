/* eslint-disable prettier/prettier */

import { Controller, Post, Body, Get } from '@nestjs/common'; 
import { AuthService } from './auth.service';
import { SignUpDto } from './Dto/signup.dto';
import { LogInDto } from './Dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/signup')
    signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
        return this.authService.signUp(signUpDto);
    }

    @Get('/login')
    login(@Body() Logindto: LogInDto): Promise<{ token: string }> {
        return this.authService.login(Logindto);
    }
}



