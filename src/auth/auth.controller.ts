/* eslint-disable prettier/prettier */

import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './Dto/signup.dto';
import { LogInDto } from './Dto/login.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { User } from './schemas/user.schema';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/signup')
    @ApiOperation({ summary: 'User registration', description: 'Register a new user' })
    @ApiBody({ type: SignUpDto })
    @ApiResponse({ status: 201, description: 'User registered', type: User })
    signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
        return this.authService.signUp(signUpDto);
    }

    @Post('/login')
    @ApiOperation({ summary: 'User login', description: 'Authenticate and generate a token for the user' })
    @ApiResponse({ status: 200, description: 'User authenticated', type:User })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    login(@Body() Logindto: LogInDto): Promise<{ token: string }> {
        return this.authService.login(Logindto);
    }
}
