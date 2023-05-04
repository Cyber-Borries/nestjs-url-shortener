import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { urlCreateInput } from '../dto';
import { Prisma } from '.prisma/client';

@Injectable()
export class UrlService {
  constructor(private prisma: PrismaService) {}

  async urlCreate(dto: urlCreateInput) {
    let randoNumbers = [1, 2, 3, 4, 5];
    let shorterUrl = '';
    for (let i = 0; i < 5; i++) {
      let randomIndex = Math.floor(Math.random() * randoNumbers.length);
      shorterUrl += randoNumbers[randomIndex];
    }

    try {
      const existingUrl = await this.prisma.url.findUnique({
        where: {
          originalUrl: dto.originalUrl,
        } as Prisma.urlWhereUniqueInput,
      });

      if (existingUrl) {
        return existingUrl.shortUrl;
      }
      const newUrl = await this.prisma.url.create({
        data: {
          originalUrl: dto.originalUrl,
          shortUrl: shorterUrl,
        },
      });
      return newUrl.shortUrl;
    } catch (error) {
      return 'Error creating URL';
    }

    //save short and original url to db
  }

  urlRedirect(@Param('shortUrl') shortUrl: string) {
    return this.prisma.url.findFirst({
      where: {
        shortUrl,
      },
    });
  }
}
