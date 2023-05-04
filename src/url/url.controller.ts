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
  async urlRedirect(@Param('shortUrl') shortUrl: string, @Res() res: Response) {
    const originalUrl = await this.urlService.urlRedirect(shortUrl);
    console.log(typeof originalUrl);
    if (!originalUrl) {
      res.render('timeout', { shortUrl }, (e, html) => {
        res.send(html);
      });
    } else {
      res.status(301).redirect(`https://${originalUrl.originalUrl}`);
      return { originalUrl };
    }

    // (global as any).originalUrl = originalUrl;
  }
}
