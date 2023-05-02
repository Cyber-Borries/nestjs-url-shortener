import { Module } from '@nestjs/common';
import { UrlModule } from './url/url.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigServiceService } from './config-service/config-service.service';

@Module({
  imports: [UrlModule],
  controllers: [AppController],
  providers: [AppService, ConfigServiceService],
})
export class AppModule {}
