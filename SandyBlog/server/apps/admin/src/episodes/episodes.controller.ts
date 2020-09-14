import { Controller, Get } from '@nestjs/common';
import { Episode } from '@libs/db/models/episode.model';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Course } from '@libs/db/models/course.model';

@Crud({
    model:Episode
})
@Controller('episodes')
@ApiTags('课时')
export class EpisodesController {
    constructor(
        @InjectModel(Episode) private readonly model: ModelType<Episode>,
        @InjectModel(Course) private readonly courseModel: ModelType<Course>
    ) {}

     @Get('option')
     async option(){
         const courses=(await this.courseModel.find()).map((v=>({
            label:v.name,
            value:v._id
          })))
         return{
            title: "课时管理",
            page: true,
            translate:false,
            column: [
              {label: "所属课程",prop: "course",type: "select", dicData:courses, row: true,mock:{
                        type:'dic',
                      }},
               {
                label: "课时名称",prop: "name", sortable: true, search: true, regex: true,  searchMenuSpan: 8, span: 24, row: true,
              },
              { label: "视频文件",prop: "file",type:'upload',action:'/upload',listType: "picture-img",limit: 1, dataType: "string", row: true, },
            ]
         }
     }
}
