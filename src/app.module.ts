import { Module } from '@nestjs/common';
import { UrlModule } from './url/url.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [UrlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
