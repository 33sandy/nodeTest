import { prop, modelOptions, Ref } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { Course } from './course.model'

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})

export class Episode{
    @ApiProperty({description:'名称',example:'name'})
    @prop()
    name:string
    @ApiProperty({description:'文件',example:''})
    @prop()
    file:string
    
    @ApiProperty({description:'所属课程',example:''})
    @prop({ref:'Course'})
    course:Ref<Course>
}