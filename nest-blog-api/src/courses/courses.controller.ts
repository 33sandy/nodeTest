import { Controller } from '@nestjs/common';

import { Crud } from 'nestjs-mongoose-crud'
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { Course } from './courses.model';
import { ModelType } from '@typegoose/typegoose/lib/types';


@Controller('courses')
@Crud({
    model:Course,
    routes:{
        find:{
            decorators:[
                ApiOperation({summary:'课程列表'})
            ]
        },
        create:{
        }
    }
})

@Controller('posts')
@ApiTags('课程')
export class CoursesController {
    constructor(
        @InjectModel(Course) private  readonly model:ModelType<Course>
    ){}
}