import { Controller, Post, Body, Get, Redirect, Param } from '@nestjs/common';
import { UrlService } from './url.service';
import { urlCreateInput } from '../dto/index';

@Controller('url')
export class UrlController {
  constructor(private urlService: UrlService) {}

  @Post('create')
  urlCreate(@Body() dto: urlCreateInput) {
    return this.urlService.urlCreate(dto);
  }
  @Get(':shortUrl')
  @Redirect('')
  async urlRedirect(@Param('shortUrl') shortUrl: string): Promise<any> {
    const originalUrl = await this.urlService.urlRedirect(shortUrl);
    return {
      url: originalUrl,
      statusCode: 301,
    };
  }
}
