import { prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class Course{
    @ApiProperty({description:'课程标题',example:'课程标题'})
    @IsNotEmpty({message:'请填写标题'})
    @prop()
    title:string
    @ApiProperty({description:'课程内容',example:'课程内容'})
    @prop()
    content:string

}