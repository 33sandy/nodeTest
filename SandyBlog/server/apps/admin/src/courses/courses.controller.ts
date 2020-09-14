import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { Course } from '@libs/db/models/course.model';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';

@Crud({
    model:Course,
    routes:{
    }
})

@Controller('courses')
@ApiTags('课程')
export class CoursesController {
    constructor(@InjectModel(Course) private readonly model: ModelType<Course>) {}

  @Get('option')
  option(){
        return{
            title: "课程管理",
            page: true,
            column: [
              {
                label: "课程名称",prop: "name", sortable: true, search: true, regex: true,  searchMenuSpan: 8, span: 24, row: true,
              },
              {
                label: "课程封面图", prop: "cover", type: "upload",listType: "picture-img", row: true,limit: 1, 
                accept: ["image/png", "image/jpg", "image/jpeg"], tip: "只能上传jpg/png文件，且不超过500kb",
                action: "/upload",
                dataType: "string",
                labelWidth: 120,
                span: 24,
              },
            ],  
        }
    }

}
