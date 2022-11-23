import { NestFactory } from '@nestjs/core';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config =  new DocumentBuilder()
  .setTitle('Apis Example')
  .setDescription("This is a sample nestjs backed with swagger implementation")
  .setVersion('1.0')
  .addTag('Apis')
  .build();
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,document);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
