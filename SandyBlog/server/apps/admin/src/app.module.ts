import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';
import { MulterModule } from '@nestjs/platform-express';
import { CommonModule } from 'libs/common/src';
const MAO = require('multer-aliyun-oss')

@Module({
  imports: [
    CommonModule,
    MulterModule.registerAsync({
      useFactory(){
        return{
          storage:MAO({
            config: {
              region: process.env.OSS_REGION,    //选择地区
              accessKeyId: process.env.OSS_ACCESSKEYID,
              accessKeySecret: process.env.OSS_ACCSEEKEYSECRECT,
              bucket: process.env.OSS_BUCKET      //存储空间名称
          }
          })
        }
      }
    }),
    UsersModule,
    CoursesModule,
    EpisodesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
