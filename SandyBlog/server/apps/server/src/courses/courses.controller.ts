import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud'
import { Course } from '@libs/db/models/course.model';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';

@Crud({
    model:Course,
    routes:{
        create:false,
        update:false,
        delete:false,
    }

})
@ApiTags('课程管理')

@Controller('courses')
export class CoursesController {
    constructor(
        @InjectModel(Course) private model

    ){}
}
