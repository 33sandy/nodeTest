import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { ApiTags, ApiProperty, ApiOperation, ApiBasicAuth, ApiBearerAuth } from '@nestjs/swagger';
import { strict } from 'assert';
import { stringify } from 'querystring';
import { InjectModel } from 'nestjs-typegoose';
import { User, UserDocument } from '@libs/db/models/user.model';
import { ReturnModelType, DocumentType } from '@typegoose/typegoose';
import { AuthGuard } from '@nestjs/passport'
import { RegsiterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import {JwtService} from '@nestjs/jwt'
import { CurrentUser } from './current-user.decorator';

@ApiTags('用户')
@Controller('auth')
export class AuthController {
    constructor(            //注册
        private jwtService:JwtService,
        @InjectModel(User) private  userModel:ReturnModelType<typeof User>
    ){}

    @Post('register')
    @ApiOperation({summary:'注册'})
    async register(@Body() dto:RegsiterDto){
        const res=await this.userModel.create(dto)
        return res
    }

    @UseGuards(AuthGuard('local'))      //用策略local
    @Post('login')
    @ApiOperation({summary:'登录'})
    async login(@Body() dto:LoginDto,@Req() req){
        return {
            status:0,
            token:this.jwtService.sign(String(req.user._id))
        }
    }


    @Get('user')
    @ApiOperation({summary:'获取用户信息'})
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()   //传递token
    async user(@Req() req){
        
        return {
            status:0,
            data:req.user
        }
    }

}
