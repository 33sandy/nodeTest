import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();     //运行跨域
  // // 静态托管
  // app.useStaticAssets('uploads',{
  //   prefix:'/uploads'
  // })

  const options = new DocumentBuilder()
  .setTitle('NestJs视频网站前端API')
  .setDescription('供界面调用')
  .addBearerAuth()     //启用token
  .setVersion('1.0')
  .addTag('默认')
  .build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('api-docs', app, document);
  const PORT=process.env.SERVER_PORT || 3001
  await app.listen(PORT);
  console.log(`http://localhost:${PORT}/api-docs`)
}
bootstrap();
