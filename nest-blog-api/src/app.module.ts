import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypegooseModule } from "nestjs-typegoose";
import { PostsModule } from './posts/posts.module';
import { CoursesModule } from './courses/courses.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypegooseModule.forRoot("mongodb://localhost:27017/nest-blog-api", {
      useNewUrlParser: true,
    }),
    PostsModule,
    CoursesModule,
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
