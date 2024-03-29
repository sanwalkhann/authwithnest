/* eslint-disable prettier/prettier */

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import {SignUpDto} from "./Dto/signup.dto"
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LogInDto } from './Dto/login.dto';

@Injectable()
export class AuthService {

    constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService : JwtService
     ) { }

     async signUp( SignUpDto: SignUpDto ):Promise<{token: string}>{
        const{name, email, password} = SignUpDto

        const hashedPassword = await bcrypt.hash(password , 10)

        const user = await this.userModel.create({
            name,
            email,
            password: hashedPassword
        })

        const token = this.jwtService.sign({id: user._id})
        return {token}
     }


     async login(LogInDto: LogInDto): Promise<{ token: string }> {
        const { email, password } = LogInDto;
    
        const user = await this.userModel.findOne({ email });
    
        if (!user) {
          throw new UnauthorizedException('Invalid email or password');
        }
    
        const isPasswordMatched = await bcrypt.compare(password, user.password);
    
        if (!isPasswordMatched) {
          throw new UnauthorizedException('Invalid email or password');
        }
    
        const token = this.jwtService.sign({ id: user._id });
    
        return { token };
      }
    }


