import { prop, modelOptions, Ref, ArrayProp } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { Episode } from './episode.model'

@modelOptions({
    schemaOptions:{
        timestamps:true,
        toJSON:{virtuals:true}
    }
})

export class Course{
    @ApiProperty({description:'课程名称',example:'课程名称'})
    @prop()
    name:string
    @ApiProperty({description:'封面图',example:'封面图'})
    @prop()
    cover:string

    @ApiProperty({description:'课时列表',example:'[]'})
    @ArrayProp({
        ref:'Episode',
        localField:'_id',       //关联键
        foreignField:'course'
    })
    episodes:Ref<Episode>[]
}