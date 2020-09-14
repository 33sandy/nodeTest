import { Controller, Get, Post, Body, Query, Put, Param, Delete, Inject } from '@nestjs/common';
import { get } from 'http';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { InjectModel } from 'nestjs-typegoose';
import {Post as PostSchame} from './post.model'
import { ModelType } from '@typegoose/typegoose/lib/types';

import { Crud } from 'nestjs-mongoose-crud'

class CreatePostDta{
    @ApiProperty({description:'帖子标题',example:'帖子标题1'})
    @IsNotEmpty({message:'请填写标题'})
    title:string
    @ApiProperty({description:'帖子内容',example:'帖子内容1'})
    content:string
}
@Crud({
    model:PostSchame,
    routes:{
        find:{
            decorators:[
                ApiOperation({summary:'帖子列表'})
            ]
        },
        create:{
            dto:CreatePostDta
        }
    }
})

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
    constructor(
        @InjectModel(PostSchame) private  readonly model:ModelType<PostSchame>
    ){}
/*
    @Get()

    @ApiOperation({summary:'显示博客列表'})
    async index(){
        return await this.postModel.find()
    }

    @Post()
    @ApiOperation({summary:'创建博客'})
    async create (@Body() createPostDta:CreatePostDta) {
        const data= await this.postModel.create(createPostDta)
        console.log(data)
        return {
            body:data,
            success:true,
        }
    }

    @Get(':id')
    @ApiOperation({summary:'查看博客'})
    async detail(@Param('id') id:string){
        const data= await this.postModel.findById(id)
        console.log(data)
        return {
            body:data,
            success:true,
        }
    }

    @Put(':id')
    @ApiOperation({summary:'编辑博客'})
    async update(@Param('id') id:string,@Body() createPostDta:CreatePostDta){
        const data= await this.postModel.findByIdAndUpdate(id,createPostDta)
        // console.log(data)
        return {
            success:true,
        }
    }

    @Delete(":id")
    @ApiOperation({summary:'删除博客'})
    async remove(@Param('id') id:string){
        const data=await this.postModel.findByIdAndDelete(id)
        return {
            success:true,
        }
    }
    */
}
