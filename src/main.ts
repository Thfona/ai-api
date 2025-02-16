import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { createAiModel } from './create-ai-model';

async function bootstrap() {
    await createAiModel();

    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());

    await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
