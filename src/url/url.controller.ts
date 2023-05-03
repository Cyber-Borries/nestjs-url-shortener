import {
  Controller,
  Post,
  Body,
  Get,
  Redirect,
  Param,
  Res,
  Render,
} from '@nestjs/common';
import { UrlService } from './url.service';
import { urlCreateInput } from '../dto/index';
import { Response } from 'express';

@Controller('url')
export class UrlController {
  constructor(private urlService: UrlService) {}

  @Post('create')
  urlCreate(@Body() dto: urlCreateInput) {
    return this.urlService.urlCreate(dto);
  }
  @Get(':shortUrl')
  @Render('timeout')
  async urlRedirect(@Param('shortUrl') shortUrl: string, @Res() res: Response) {
    const originalUrl = await this.urlService.urlRedirect(shortUrl);
    console.log(originalUrl);

    if (!res.headersSent) {
      res.status(301).redirect(`https://${originalUrl}`);
    }

    (global as any).originalUrl = originalUrl;
    return { originalUrl };
  }
}
