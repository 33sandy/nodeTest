import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.enableCors();     //运行跨域
  // 静态托管
  app.useStaticAssets('uploads',{
    prefix:'/uploads'
  })

  const options = new DocumentBuilder()
  .setTitle('NestJs视频网站后台管理')
  .setDescription('后台管理界面调用')
  .setVersion('1.0')
  .addTag('默认')
  .build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('api-docs', app, document);
  const PORT=process.env.ADMIN_PORT || 3002
  await app.listen(PORT);
  console.log(`http://localhost:${PORT}/api-docs`)
}
bootstrap();
