import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { User } from '@libs/db/models/user.model';
import { Crud } from 'nestjs-mongoose-crud'
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Crud({
    model:User,
    routes:{
        find:{
            decorators:[
                ApiOperation({summary:'用户列表'})
            ]
        },
        create:{
            decorators:[
                ApiOperation({summary:'创建用户'})
            ]
        }
    }

})
@Controller('users')
@ApiTags('用户')
export class UsersController {
    constructor(@InjectModel(User) private readonly model: ModelType<User>) {}

    @Get('option')
    option(){
        return{
            title: "用户管理",
        page: true,
        column: [
          {
            label: "姓名",prop: "username", sortable: true, search: true, regex: true,  searchMenuSpan: 8, span: 24, row: true,
          },
           {
            label: "密码",prop: "password", sortable: true, search: true, regex: true,  searchMenuSpan: 8, span: 24, row: true,
          },
        ]
        }
     }
}
