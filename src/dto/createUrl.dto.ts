import { IsUrl } from 'class-validator';

export class urlCreateInput {
  @IsUrl()
  originalUrl: string;

  shortUrl: string;
}
